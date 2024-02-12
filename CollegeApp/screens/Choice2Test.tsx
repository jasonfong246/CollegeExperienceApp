import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Choice2Test = () => {
  const navigation = useNavigation();

 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choice 2 Filler Text Here</Text>
      
      
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Choice2Test;