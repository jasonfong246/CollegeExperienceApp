import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Choice1Test = () => {
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
        source={{uri: 'https://ih1.redbubble.net/image.1644080992.0479/st,small,507x507-pad,600x600,f8f8f8.jpg'}}
        style={{width: 500, height: 400}}></Image>

      <Text style={styles.title}>MEET THE NULL TEAM</Text>
      <Text>Jason Leong: Team Lead and Front-End Developer</Text>
      <Text>Jason Fong: Front-End Developer</Text>
      <Text>Luke: Back-End Developer and SQLite Developer</Text>
      <Text>Yonis: Works on TXT File Reading System</Text>
      <Text>Nedra Allen: Project Sponsor</Text>
      <Text>Dauntica Woods: Manages all Capstone Teams</Text>
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

export default Choice1Test;