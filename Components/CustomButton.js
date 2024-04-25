import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const CustomButton = ({ name, onPress, height, width, marginLeft, marginRight, color }) => {
   return (
      <View style={[styles.container, { height: height, width: width, marginRight: marginRight, marginLeft: marginLeft }]}>
         <TouchableOpacity
            style={[styles.button, { backgroundColor: color ? color : '#FFD700' }]}
            onPress={onPress}
         >
            <Text style={styles.buttonText}>{name}</Text>
         </TouchableOpacity>
      </View>
   ); 
};

const styles = StyleSheet.create({
   container: {

   },
   button: { // Yellow color
      padding: 10,
      borderRadius: 10,
   },
   buttonText: {
      color: '#ffffff', // Text color
      fontSize: 16,
      textAlign: 'center',
      fontFamily: "Poppins-Bold"
   },
});

export default CustomButton;
