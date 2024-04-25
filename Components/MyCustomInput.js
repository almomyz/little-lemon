import React from 'react';
import { TextInput } from 'react-native';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomTextInput from '../Components/CustomTextInput';
const MyCustomInput = ({ placeholder, onChangeText, value, secureTextEntry, icon, name }) => {
    return (
      
        <View style={styles.container}>
            <Text style={styles.textInput}>
            {name}  
            </Text>
            <CustomTextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={value}
              icon={icon}
              placeholder={placeholder}
              secureTextEntry={secureTextEntry}
            />
        </View>
      
  
    );

   
  };

  const styles = StyleSheet.create({
    textInput: {
        fontFamily: "Karla-Regularr",
        fontSize: 20,
        marginBottom:5,
    },
    container: {
        marginBottom: 10
    }
})

export default MyCustomInput;