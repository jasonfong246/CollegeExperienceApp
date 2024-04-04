import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Animated } from 'react-native';
import type { PropsWithChildren } from 'react';
import type { ViewStyle } from 'react-native';
import Sound from 'react-native-sound';

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
    { type: 'dialogue', text: "This is just the beginning. There’s so much more to learn and explore. I’m ready for it." },
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


const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'flex-end', // Keeps the dialogue box at the bottom
    backgroundColor: '#fff',
  },
  dialogueBox: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    backgroundColor: 'white',
    marginBottom: 20, // Margin from the bottom
    alignSelf: 'stretch', // Stretch box to match parent width
    marginHorizontal: 20, // Margin from the left and right
  },
  dialogueText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'left', // Align text to the left
  },
  choicesContainer: {
    // This container ensures that the choices are rendered at the top.
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  choiceContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#dedede',
    borderRadius: 5,
    backgroundColor: '#f8f8f8',
    marginHorizontal: 20,
    // The shadow and elevation properties give the choices a raised look.
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  choiceText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'left', // Align text to the left
  },
});

export default AcademicSeminar;

