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


const WanderAlone = () => {

  
  // Script with dialogue and choices
  const script = [
    { type: 'dialogue', text: "Eager to chart your own course, YOU decide to explore the campus solo, bypassing the organized orientation events. With a spirit of adventure, you embark on a personal journey to uncover the hidden wonders of your new academic home." },
    { type: 'dialogue', text: "Your first discovery is the historic heart of the campus, where the echoes of the past meet the dynamic energy of the present. Each building tells a tale of innovation, struggle, and triumph, inspiring you with a deep sense of connection to the generations of students who have walked these paths before." },
    { type: 'dialogue', text: "Drawn to the creativity on display, you find yourself amidst a field of provocative art installations. Each piece, a bold commentary on contemporary issues, sparks a fire in you to engage with the campus's cultural life actively. The thought of contributing your voice to this creative cacophony is exhilarating." },
    { type: 'dialogue', text: "Venturing further, you stumble upon a serene courtyard, a hidden sanctuary perfect for introspection and creativity. It's here, in this secluded space, that you feel a profound sense of belonging and a desire to carve out your own niche within this sprawling academic landscape." },
    { type: 'dialogue', text: "As you prepare to leave this tranquil spot, a brightly colored flyer catches your eye. It announces a startup pitch competition focused on innovative solutions for campus sustainability. The challenge is open to all, seeking bold ideas and fresh perspectives." },
    { type: 'dialogue', text: "Fired up by the opportunity to make an impact and driven by a surge of entrepreneurial spirit, YOU are at a crossroads, faced with thrilling options:" },
    {
      type: 'choices', options: [
        { id: '1', text: " Join the Startup Pitch Competition: " },
        { id: '2', text: " Collaborate with the Art Collective " },
        { id: '3', text: " Organize an Exploration Club " }
      ]
    }
  ];
  const artisticScene = require("./ArtisticScenery.jpg");
  const alexPic = require("./ALEX.png");
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
      <Image source={artisticScene} style={{ width: 400, height: 350, alignSelf: 'center', position: 'absolute', top: 50 }}></Image>

      <FadeInView
        style={{
          width: 250,
          height: 250,
          backgroundColor: 'transparent', // Set background to transparent for Image
        }}>
       
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


export default WanderAlone;

