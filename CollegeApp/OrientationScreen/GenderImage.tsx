import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

const GenderImage = ({ gender, onSelect }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Define the image sources based on gender
  const imageDetails = {
    male: [
      { id: "PlayerMale1", source: require("./malePlayer.png") },
      { id: "PlayerMale2", source: require("./PlayerMale.png") }
    ],
    female: [
      { id: "PlayerFemale1", source: require("./PlayerFemale1.png") },
      { id: "PlayerFemale2", source: require("./PlayerFemale2.png") }
    ],
    // Add more genders if necessary
  };

  // Get images based on the selected gender
  const genderImages = imageDetails[gender] || [];

  const handleSelect = (image) => {
    setSelectedImage(image.id);  // Save the selected image id
    if (onSelect) {
      onSelect(image.id);  // Pass the image id to the parent component
    }
  };

  return (
    <View style={styles.container}>
      {genderImages.map((image) => (
        <TouchableOpacity key={image.id} onPress={() => handleSelect(image)}>
          <Image
            source={image.source}
            style={[
              styles.image,
              selectedImage === image.id && styles.selected  // Apply selected style if image is selected
            ]}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    margin: 10,
  },
  selected: {
    borderWidth: 3,
    borderColor: 'blue',
  },
});

export default GenderImage;
