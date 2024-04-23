import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const CustomButton = ({name ,onPress}) => {
 return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{name}</Text>
      </TouchableOpacity>
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
 },
 button: {
    backgroundColor: '#FFD700', // Yellow color
    padding: 10,
    borderRadius: 5,
 },
 buttonText: {
    color: '#ffffff', // Text color
    fontSize: 16,
    textAlign: 'center',
    fontFamily:"Poppins-Bold"
 },
});

export default CustomButton;
