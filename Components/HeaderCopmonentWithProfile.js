import React from "react";
import { View, StyleSheet, Image, Text, Pressable } from "react-native";

const HeaderComponentWithProfile = ({
  text,
  placeholderImageSource,
  selectedImage,
  onPress,
}) => {
  const imageSource = selectedImage
    ? { uri: selectedImage }
    : placeholderImageSource;

  return (
    <View style={styles.header}>
      <View style={styles.textContainer}>
        <Text style={styles.textHeader}>{text}</Text>
      </View>
      <View style={styles.profile}>
        <Pressable onPress={onPress}>
          <Image source={imageSource} style={styles.image} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: 400,
    height: 72,
    flexDirection: "row",
    backgroundColor: "#D9D9D9",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 5,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
  },
  textHeader: {
    fontFamily: "Karla-Bold",
    fontSize: 25,
  },
  profile: {
    borderRadius: 30,
    marginRight: 30,
    borderColor: "#F4CE14",
    borderWidth: 1,
    alignContent: "center",
    alignItems: "center",
    height: 60,
    width: 60,
  },
  image: {
    borderRadius: 30,
    borderColor: "#fff",
    borderWidth: 1,
    alignContent: "center",
    alignItems: "center",
    height: 58,
    width: 58,
  },
});

export default HeaderComponentWithProfile;
