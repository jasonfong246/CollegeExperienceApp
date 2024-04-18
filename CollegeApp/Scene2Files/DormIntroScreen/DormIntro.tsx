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


const DormIntro = () => {

  
  // Script with dialogue and choices
  const script = [
    { type: 'dialogue', text: "YOU head to your new dorm room, seeking a quiet space amid the day's excitement. The room, bathed in sunlight, awaits the personal touch that will transform it into a home." },
    { type: 'dialogue', text: "The tranquility is pleasantly interrupted by the entrance of your roommate, TAYLOR, whose arrival brings a new energy into the room. With boxes labeled “Books,” “Tech,” and “Party Supplies,” Taylor’s vibrant personality is immediately evident." },
    { type: 'dialogue', text: "TAYLOR: Hey! I guess you’re my roommate. I’m Taylor. Just got back from exploring the campus. It’s really great to meet you!" },
    { type: 'dialogue', text: "In the shared task of unpacking and decorating, a friendship begins to bloom, rooted in mutual interests and laughter." },
    { type: 'dialogue', text: "As the room takes shape, so does your connection with Taylor. In the midst of sharing stories, Taylor suddenly remembers something important." },
    { type: 'dialogue', text: "TAYLOR (excitedly): Oh! There’s this awesome party happening tonight on campus. It’s sort of a welcome bash for new students. I was thinking of going. Wanna join? It’ll be fun, and we could meet some more people together!" },
    { type: 'dialogue', text: "Faced with Taylor's invitation, YOU realize the evening could unfold in several ways. It's a moment of decision that could define the beginning of your college social life." },
    
    {
      type: 'choices', options: [
        { id: '1', text: " Accept the Party Invitation " },
        { id: '2', text: " Politely Decline and Suggest an Alternative " },
        { id: '3', text: " Ask for a Raincheck " }
      ]
    }
  ];
  const collegPic = require("./Images/CollegeDorm.jpg");
  const roommate = require("./Images/Roommate.png");
  const playerPic = require("./Images/Player.png");
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
       <Image source={collegPic} style={{ width: 400, height: 350, alignSelf: 'center', position: 'absolute', top: 50 }}></Image>

<FadeInView
  style={{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent', // Set background to transparent for Image
  }}>
  <Image
    source={roommate} // Replace with your image source
    style={{
      width: 300,
      height: 300,
      resizeMode: 'contain', // Adjust resizeMode as needed
    }}
  />
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

export default DormIntro;

