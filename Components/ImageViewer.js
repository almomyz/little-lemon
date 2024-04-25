import { View, StyleSheet, Image, Text, Pressable } from 'react-native';
export default function ImageViewer({ placeholderImageSource, selectedImage }) {
    const imageSource = selectedImage  ? { uri: selectedImage } : placeholderImageSource;
  
    return <Image source={imageSource} style={styles.image} />;
  }
  
  const styles = StyleSheet.create({

    image: {
        width: 122,
        height: 122,
        borderRadius: 25,
        backgroundColor: "red",
        marginBottom: 20,
        borderColor: '#F4CE14',
        borderRadius: 62.5,
        borderWidth: 2,
  
     },
  })