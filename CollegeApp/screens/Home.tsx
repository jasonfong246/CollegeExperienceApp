import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    // Here you can implement logout logic if needed
    // For simplicity, this example just navigates back to the Login screen
    navigation.navigate("Login");
  };

  const handleChoice1TestChange = () => {
     // A function call that changes screen to Choice 1 Test
    navigation.navigate("Choice1Test");
  };

  const handleChoice2TestChange = () => {
    // A function call that changes screen to Choice 2 Test
    navigation.navigate("Choice2Test");
  };

  const handleChoice3TestChange = () => {
    // A function call that changes screen to Choice 2 Test
    navigation.navigate("Choice3Test");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Home Screen!</Text>
      <Button title="Logout" onPress={handleLogout} />
      <Button title="Choice1Test" onPress={handleChoice1TestChange} />
      <Button title="Choice2Test" onPress={handleChoice2TestChange} />
      <Button title="Choice3Test" onPress={handleChoice3TestChange} />
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

export default Home;