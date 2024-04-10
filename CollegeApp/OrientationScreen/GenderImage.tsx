import React from 'react';
import { View, Image } from 'react-native';

const GenderImage = ({ gender }) => {
  // Define the image sources based on gender
  const PlayerMale1=require("./malePlayer.png");
    const PlayerFemale1=require("./PlayerFemale1.png");
    const PlayerMale2=require("./PlayerMale.png");
    const PlayerFemale2=require("./PlayerFemale2.png");

  // Choose the image source based on the gender value
  let imageSource;
  let imageSource2;
  switch (gender) {
    case 'male':
      imageSource = PlayerMale1;
      imageSource2=PlayerMale2;
      break;
    case 'female':
      imageSource = PlayerFemale1;
      imageSource2=PlayerFemale2;
      break;
    default:
      imageSource = PlayerFemale2;
      imageSource2=PlayerMale2;
      break;
  }

  return (
    <View>
      {/* Display the image */}
      <Image source={imageSource} style={{ flex: 1,resizeMode: 'contain', }} />
      <Image source={imageSource2} style={{ flex: 1,resizeMode: 'contain', }} />
    </View>
  );
};

export default GenderImage;
