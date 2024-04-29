import React from "react";
import { TextInput } from "react-native";
import { View, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
const CustomTextInput = ({
  placeholder,
  onChangeText,
  value,
  secureTextEntry,
  icon,
  name,
}) => {
  return (
    <View style={styles.container}>
      <Icon name={icon} size={20} color="#000" style={styles.icon} />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 10,
    margin: 10,
    borderRadius: 5,
    height: 42,
    width: 346,
    borderWidth: 1, // Add border width
    borderColor: "#495E57", // Add border color
  },

  text: {
    fontFamily: "Karla-Regular",
    fontSize: 20,
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default CustomTextInput;
