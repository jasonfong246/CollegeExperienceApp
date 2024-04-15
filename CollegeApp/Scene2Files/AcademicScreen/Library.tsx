import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Animated } from 'react-native';
import type { PropsWithChildren } from 'react';
import type { ViewStyle } from 'react-native';
import Sound from 'react-native-sound';
import styles from './styles';

type FadeInViewProps = PropsWithChildren<{ style: ViewStyle }>;

const FadeInView: React.FC<FadeInViewProps> = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000, // Adjust duration as needed
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}>
      {props.children}
    </Animated.View>
  );
};


const Library = () => {

  
  // Script with dialogue and choices
  const script = [
    { type: 'dialogue', text: "As you walk towards the library, eager to dive deeper into the topics discussed, the scene transitions to the library interior." },
    { type: 'dialogue', text: "YOU are in the vast, quiet halls of the university library, surrounded by towering shelves of books. The air is thick with the scent of paper and the promise of knowledge. It’s a place of endless exploration, and YOU feel a strong connection to the academic heart of the campus." },
    { type: 'dialogue', text: "While browsing through the aisles, YOU stumble upon a flyer pinned to a bulletin board. It reads:" },
    { type: 'dialogue', text: "JOIN THE DEBATE CLUB: Sharpen Your Wit and Meet Like-minded Thinkers!Intrigued, YOU ponder your next step. This could be an opportunity to apply what you've just learned in the seminar and engage in stimulating discussions. However, YOU also remember Jamie mentioning a study group meeting soon, promising a more focused approach to academic excellence." },
    { type: 'dialogue', text: "At this moment, YOU face a choice:" },
    {
      type: 'choices', options: [
        { id: '1', text: "Join the Debate Club: 'The debate club sounds like a perfect place to continue honing my critical thinking and public speaking skills. It’s a chance to apply what I learned today and challenge myself further.'" },
        { id: '2', text: "Join the Study Group: 'The study group with Jamie and others from the seminar will give me a solid support system and a focused environment for academic growth. It’s important to build a strong foundation in my studies from the start.'" }
      ]
    }
  ];
  const collegLib = require("./CollegeLibrary.jpg");
  const seminarLeader = require("./SeminarLeader.png");
  const Jamie = require("./JAMIE.png");
  const playerPic = require("./Player.png");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [choiceMade, setChoiceMade] = useState(false);

  const sound = new Sound('./2.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('Failed to load the sound', error);
      return;
    }
  });
  sound.play((success) => {
    if (success) {
      console.log('Sound played successfully');
    } else {
      console.log('Failed to play the sound');
    }
  });//Test for sound :(

  const advanceScript = () => {
    if (currentIndex < script.length - 1 && !choiceMade) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleChoice = (choiceId: string) => {
    console.log("Choice selected:", choiceId);
    // Handle the choice selection here
    setChoiceMade(true);
  };

  return (
    <View style={styles.screenContainer}>
      <Image source={collegLib} style={{ width: 400, height: 350, alignSelf: 'center', position: 'absolute', top: 50 }}></Image>

      <FadeInView
        style={{
          width: 250,
          height: 250,
          backgroundColor: 'transparent', // Set background to transparent for Image
        }}>
       <Image source={Jamie} style={{ width: 300, height: 300, resizeMode: 'contain' }}/>
      </FadeInView>

      {(script[currentIndex].type === 'dialogue') && (
        <TouchableOpacity onPress={advanceScript} style={styles.dialogueBox}>
          <Text style={styles.dialogueText}>{script[currentIndex].text}</Text>
        </TouchableOpacity>
      )}

      {script[currentIndex].type === 'choices' && !choiceMade && (
        script[currentIndex].options.map((option) => (
          <TouchableOpacity key={option.id} onPress={() => handleChoice(option.id)} style={styles.choiceContainer}>
            <Text style={styles.choiceText}>{option.text}</Text>
          </TouchableOpacity>
        ))
      )}
    </View>
  );
};



export default Library;

