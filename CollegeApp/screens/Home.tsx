import React, {useState, useEffect} from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import jsonData from './example.json'

const Home = () => {
  const navigation = useNavigation();
  const [message, setMessage] = useState('');

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

  const handlePrologueScreenChange = () => {
    navigation.navigate("PrologueScreen", { message: jsonData.message });
  };

  return (
    <View style={styles.container}>
      
        <Text style={styles.topCorner}>SWE Capstone Team NULL</Text>
      
      <View style={styles.logout}>
        <Button title="Logout" onPress={handleLogout} />
      </View>
      
      <Text style={styles.title}>Welcome to My College Experience!</Text>

      <Image
        source={{uri: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}
        style={{width: 400, height: 400}}></Image>

      <Text style={styles.title}>What Should We Do?</Text>

      <View style = {styles.button}>
        <Button title="Meet THE Team" onPress={handleChoice1TestChange} />
      </View>
      <View style = {styles.button}>
        <Button title="About THE Project" onPress={handleChoice2TestChange} />
      </View>
      <View style = {styles.button}>
        <Button title="Begin THE Game" onPress={handlePrologueScreenChange} />
      </View>
      <Text>{message}</Text>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    top: 20,
    fontWeight: 'bold',
  },

  button: {
    fontSize: 24,
    marginBottom: 20,
    padding: 0,
  },
  logout: {
    position: 'absolute',
    top:5,
    right:10,
    height: 40,
    
  },
  topCorner: {
    position: 'absolute',
    top:5,
    left:10,
    fontWeight: 'bold',
  },
  });

export default Home;