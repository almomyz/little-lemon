import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

const CustomButton = ({ title, onPress }) => {
  return (
    <View Style={styles.button}>
      <Button title={title} onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    Color: '#023c69',
    padding: 10,
    borderRadius: 5,
    width:161,
    height: 40,
  }
});

export default CustomButton;