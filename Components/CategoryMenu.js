import React from 'react';
import {
 View,
 StyleSheet,
 Text,
 Dimensions,
} from "react-native";

// Function to calculate responsive font size
const responsiveFontSize = (fontSize) => {
 const { width } = Dimensions.get('window');
 // You can adjust the base width and font size as needed
 const baseWidth = 375; // Base width for iPhone X
 const baseFontSize = 20; // Base font size
 return fontSize * (width / baseWidth);
};

const CategoryMenu = ({ text, isenble }) => {
 // Calculate responsive font size
 const responsiveFont = responsiveFontSize(15);

 return (
    <View style={isenble ? styles.enbleHeader : styles.disbleHeader}>
      <Text style={[isenble ? styles.enbleText : styles.disbleText, { flexWrap: 'nowrap' }]}>{text}</Text>
    </View>
 );
};

const styles = StyleSheet.create({
 enbleHeader: {
    width: 78,
    height: 34,
    backgroundColor: "#F4CE14",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 5,
    padding:5
 },
 disbleHeader: {
    width: 78,
    height: 34,
    backgroundColor: "#D9D9D9",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 5,
    padding:5
 },
 enbleText: {
    fontFamily: "Karla-Bold",
    color: "#fff",
    fontSize:15
 },
 disbleText: {
    fontFamily: "Karla-Bold",
    fontSize:15
 },
});

export default CategoryMenu;
