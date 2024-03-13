import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Scene1 = () => {
  // Script with dialogue and choices
  const script = [
    { type: 'dialogue', text: "Alex: Good morning, everyone! Welcome to what will be some of the most memorable years of your lives. I'm Alex, a senior here, and I'll be your guide today. We’re thrilled to have you join our university family!" },
    { type: 'dialogue', text: "Alex: Here, you'll face choices that shape your future. Today's no different. We’ve organized two fantastic opportunities for you to start off on the right foot. First, an academic seminar designed to equip you with essential skills for your studies. And second, a campus tour that not only shows you around but also helps you meet fellow students and make early connections." },
    { type: 'dialogue', text: "Alex: So, what’s it going to be? Will you dive into the academic side and get a head start on your classes? Or will you take this chance to explore the campus and start building your social network?" },
    { type: 'choices', options: [
        { id: '1', text: "Academic Seminar: 'I’m here to excel academically. I'll attend the seminar.'" },
        { id: '2', text: "Campus Tour: 'I want to see what campus life has to offer and meet new people.'" },
        { id: '3', text: "Skip Both Events: 'I think I'll skip these. Today feels like a day to relax on my own.'" },
        { id: '4', text: "Wander Alone: 'I prefer discovering the campus by myself. Who knows what I’ll find?'" }
      ]
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [choiceMade, setChoiceMade] = useState(false);

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
      <TouchableOpacity onPress={advanceScript} style={styles.dialogueBox}>
        <Text style={styles.dialogueText}>{script[currentIndex].type === 'dialogue' ? script[currentIndex].text : ''}</Text>
      </TouchableOpacity>
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

export default Scene1;
