import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Animated } from 'react-native';
import type { PropsWithChildren } from 'react';
import type { ViewStyle } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
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


const AcademicSeminar = () => {
  const navigation = useNavigation();
  
  // Script with dialogue and choices
  const script = [
    { type: 'dialogue', text: "The classroom is modern and brightly lit, filled with students all eager to gain an academic edge. The SEMINAR LEADER, a knowledgeable professor with a passion for teaching, stands at the front, ready to begin." },
    { type: 'dialogue', text: "SEMINAR LEADER: Welcome, future scholars! My name is Samantha, today, we'll dive into critical thinking and effective study strategies. These tools will not only serve you here but in every aspect of your life." },
    { type: 'dialogue', text: "SEMINAR LEADER: The students listen intently, absorbing every word. The Seminar Leader introduces various techniques, from time management to analytical thinking." },
    { type: 'dialogue', text: "Samantha: Let's start with an activity. Pair up, and discuss a complex topic, then we'll share and analyze each perspective. This will sharpen your critical thinking and debate skills." },
    { type: 'dialogue', text: "The room buzzes with energy as students pair off, discussing passionately. The air is filled with the vibrant exchange of ideas." },
    { type: 'dialogue', text: "A student, YOU, finds a study partner, JAMIE, an equally ambitious peer. You both delve into a discussion about the impact of technology on society, each offering unique insights." },
    { type: 'dialogue', text: "JAMIE: You make a great point about digital privacy, but have you considered the benefits of data analysis for public health?" },
    { type: 'dialogue', text: "YOU: That's a valid perspective. It's about finding a balance between innovation and ethical considerations." },
    { type: 'dialogue', text: "The Seminar Leader listens in, nodding approvingly at the depth of your conversation." },
    { type: 'dialogue', text: "Samantha: Excellent discourse! It’s crucial to see all sides of an argument. Now, let's discuss effective study strategies to further enhance your academic journey." },
    { type: 'dialogue', text: "The Seminar continues, covering a range of essential skills. As the session wraps up, students leave feeling empowered and equipped with new tools for success." },
    { type: 'dialogue', text: "Samantha: Remember, your education is what you make of it. Use these skills to build a strong foundation for your future." },
    { type: 'dialogue', text: "YOU and JAMIE exchange contacts, promising to form a study group. As you step out of the classroom, you feel a sense of accomplishment and readiness for the challenges ahead." },
    { type: 'dialogue', text: "As students from the seminar disperse across the campus, you take a moment to appreciate the beauty of the university grounds. The choice to attend the seminar has sparked a newfound enthusiasm for learning and personal growth." },
    { type: 'dialogue', text: "This is just the beginning. There’s so much more to learn and explore. I’m ready for it." }
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
    if(currentIndex==script.length-1){
      navigation.navigate("Library");
      
    }else if (currentIndex < script.length - 1 && !choiceMade) {
      setCurrentIndex(currentIndex + 1);
    }
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
    </View>
  );
};



export default AcademicSeminar;

