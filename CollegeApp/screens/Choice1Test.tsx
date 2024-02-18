import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Choice1Test = () => {
  const navigation = useNavigation();

 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MEET THE TEAM</Text>
      
      
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

export default Choice1Test;