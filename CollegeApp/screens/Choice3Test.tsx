import React, {useState, useEffect} from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import jsonData from './example.json'

const Choice3Test = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const message = route.params?.message || '';
  const handleLogout = () => {
    // Here you can implement logout logic if needed
    // For simplicity, this example just navigates back to the Login screen
    navigation.navigate("Login");
  };
 

  return (
    <View style={styles.container}>
      <Text style={styles.topCorner}>SWE Capstone Team NULL</Text>
      
      <View style={styles.logout}>
        <Button title="Logout" onPress={handleLogout} />
      </View>
      <Image
        source={{uri: 'https://s7d5.scene7.com/is/image/PaperSource/9780594228578?resMode=sharp2&op_usm=2,1,25,1&fmt=jpg&qlt=85&fit=constrain,1&wid=600&hei=600'}}
        style={{width: 500, height: 400}}></Image>
      <Text style={styles.title}>Begin the Game</Text>
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

export default Choice3Test;