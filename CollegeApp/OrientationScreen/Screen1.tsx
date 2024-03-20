import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import jsonData from './example.json';

const Screen1 = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [currentScreen, setCurrentScreen] = useState(1); // Initial screen is 1

  // Load JSON data when the component mounts
  useEffect(() => {
    setCurrentQuestion(jsonData[currentQuestionIndex]);
  }, [currentQuestionIndex]);

  const handleButtonPress = (nextQuestionIndex) => {
  setCurrentQuestionIndex(nextQuestionIndex);
  };

  return (
    <View style={styles.container}>
      {currentQuestion && (
        <>
          <Text style={styles.question}>{currentQuestion.question}</Text>
          {currentQuestion.choices.map((choice, index) => (
            <Button
              key={index}
              title={choice.text}
              onPress={() => handleButtonPress(choice.nextQuestionIndex)}
            />
          ))}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  question: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default Screen1;