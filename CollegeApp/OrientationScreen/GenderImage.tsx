import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const GenderImage = ({ gender }) => {
  // Define the image sources based on gender
  const PlayerMale1 = require("./malePlayer.png");
  const PlayerFemale1 = require("./PlayerFemale1.png");
  const PlayerMale2 = require("./PlayerMale.png");
  const PlayerFemale2 = require("./PlayerFemale2.png");

  // Choose the image source based on the gender value
  let imageSource;
  let imageSource2;
  switch (gender) {
    case 'male':
      imageSource = PlayerMale1;
      imageSource2 = PlayerMale2;
      break;
    case 'female':
      imageSource = PlayerFemale1;
      imageSource2 = PlayerFemale2;
      break;
    default:
      imageSource = PlayerFemale2;
      imageSource2 = PlayerMale2;
      break;
  }

  return (
    <View style={styles.container}>
      {/* Display the images */}
      <Image source={imageSource} style={styles.image} />
      <Image source={imageSource2} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: 200, // Adjust the width as needed
    height: 200, // Adjust the height as needed
    resizeMode: 'contain',
    marginBottom: 10, // Adjust the margin between images as needed
  },
});

export default GenderImage;
