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


const CampusTour = () => {

  
  // Script with dialogue and choices
  const script = [
    { type: 'dialogue', text: "The sun shines brightly over the campus, illuminating the historic and modern buildings alike. Students from Choice 2 gather outside the main entrance, buzzing with excitement and curiosity. The TOUR GUIDE, a friendly junior with an infectious enthusiasm for campus life, holds a clipboard and wears a bright 'Ask Me Anything!' badge." },
    { type: 'dialogue', text: "TOUR GUIDE (LUCAS): Hey everyone! I’m Lucas, and I’ll be your guide today. We’ve got a lot of ground to cover, so let’s get started. This tour isn’t just about seeing the sights; it’s about envisioning your future here, finding your place in our community." },
    { type: 'dialogue', text: "The group sets off, moving from one landmark to another. Lucas shares stories of student achievements, points out hidden gems, and explains the significance of various campus facilities." },
    { type: 'dialogue', text: "The tour arrives at the bustling student union building. Lucas highlights the clubs and organizations, emphasizing the diversity and inclusivity of the community." },
    { type: 'dialogue', text: "LUCAS: This is where ideas meet action. Whether you’re into robotics, environmental advocacy, or even quidditch, there’s a place for everyone here. And if you don’t find your passion represented, you have the support to start something new!" },
    { type: 'dialogue', text: "The students listen, intrigued by the possibilities. Among them, YOU feel a spark of excitement at the idea of joining a community where your interests can thrive." },
    { type: 'dialogue', text: "The tour reaches a scenic green space, where students are seen studying, socializing, and enjoying outdoor activities. Lucas stops, allowing everyone to soak in the vibrant campus life." },
    { type: 'dialogue', text: "LUCAS: College is more than just academics; it’s about building relationships and making memories. These green spaces are perfect for that. They’re the heart of our campus community." },
    { type: 'dialogue', text: "At this moment, YOU notice a group of students setting up for what appears to be a live music performance. The idea of joining or even forming a music group crosses your mind, showcasing the spontaneous opportunities for engagement and creativity on campus." },
    { type: 'dialogue', text: "The tour ends back at the main entrance. Students are exchanging numbers and making plans to explore their interests together." },
    { type: 'dialogue', text: "LUCAS: Remember, your college experience is what you make of it. Get involved, stay curious, and don’t hesitate to reach out for help or advice. We’re all here to support each other." },
    { type: 'dialogue', text: "As the group disperses, YOU are faced with a choice:" },
    {
      type: 'choices', options: [
        { id: '1', text: " Join a Club/Organization " },
        { id: '2', text: " Volunteer for a Campus Initiative " },
        { id: '3', text: " Attend the Live Music Event " }
      ]
    }
  ];
  const collegPic = require("./COLLEGEOrientation2.jpg");
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
      <Image source={collegPic} style={{ width: 400, height: 350, alignSelf: 'center', position: 'absolute', top: 50 }}></Image>

      <FadeInView
        style={{
          width: 250,
          height: 250,
          backgroundColor: 'transparent', // Set background to transparent for Image
        }}>
        <Image
          source={alexPic} // Replace with your image source
          style={{
            flex: 1,
            width: '100%',
            height: '100%',
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

export default CampusTour;

