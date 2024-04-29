import React from 'react';
import {
 View,
 StyleSheet,
 Image,
 Text,
 Pressable,
 ScrollView,
 ActivityIndicator,
} from "react-native";
import SkeletonContent from 'react-native-skeleton-content';

const CategoryComponent = ({ name, description, price, image }) => {
 const [isLoading, setIsLoading] = React.useState(true);

 const handleImageLoad = () => {
    setIsLoading(false);
    console.log("Image loaded successfully");
 };

 const handleImageError = (error) => {
    setIsLoading(false);
    console.error("Error loading image:", error, image);
 };

 return (
    <View style={styles.container}>
      <View>
        <SkeletonContent
          containerStyle={styles.skeletonContainer}
          isLoading={isLoading}
          layout={[
            { key: 'image', width: 107, height: 86, borderRadius: 17 },
          ]}
        >
          <Image
            style={styles.image}
            source={{
              uri: `https://github.com/Meta-Mobile-Developer-PC/Working-With-Data-API/blob/main/images/${image}?raw=true`,
            }}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        </SkeletonContent>
      </View>
      <View style={styles.column}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle} numberOfLines={2}>{description}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    width: "95%",
    height: 118,
    flexDirection: "row-reverse",
    backgroundColor: "#D9D9D9",
    marginVertical: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    alignContent: "center",
    alignItems: "center",
 },
 skeletonContainer: {
    width: 107,
    height: 86,
    borderRadius: 17,
    marginRight: 10,
    marginLeft: 20,
 },
 title: {
    fontFamily: "Poppins-Bold",
    fontSize: 20,
    color: "#000000",
 },
 subtitle: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#495E57",
 },
 image: {
    width: 107,
    height: 86,
    borderRadius: 17,
    marginRight: 10,
    marginLeft: 20,
 },
 column: {
    flexDirection: "column",
    width: "60%",
    marginVertical: 20,
    marginRight: 10,
 },
 price: {
    fontFamily: "Poppins-Bold",
    fontSize: 14,
    color: "#495E57",
 },
});

export default CategoryComponent;
