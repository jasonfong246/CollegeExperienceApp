import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Choice2Test = () => {
  const navigation = useNavigation();
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
        source={{uri: 'https://cdn.eduadvisor.my/articles/2016/02/Must-Have-Experiences-in-College-Feature-Header-2.jpg'}}
        style={{width: 400, height: 400}}></Image>
      <Text style={styles.title}>About the Project</Text>
      <Text>This app will be designed as a "Choice game app". Students will get to choose avatars to go to college. They will make decisions for the avatar. For example, what consequences will occur if he/she chooses to go to party instead of going to class for a major test. They will be able to choose friends, they will have to negotiate good and bad relationships. They will navigate college from a Freshman to graduation with obstacles and choices of how to handle situations.</Text>
      
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

export default Choice2Test;