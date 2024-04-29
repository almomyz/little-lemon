import HeaderCopmonent from "../Components/HeaderCopmonent";
import CustomTextInput from "../Components/CustomTextInput";
import CustomSpace from "../Components/CustomSpace";
import CategoryMenu from "../Components/CategoryMenu";
import CategoryComponent from "../Components/CategoryComponent";
import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  Pressable,
  ScrollView,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
const listCategoryMenu = ["Starters", "Main Dishes", "Desserts", "Drinks"];
const Home = () => {
  const [search, setSearch] = useState("");
  const [selectedItem, setSelectedItem] = useState(false);
  const [data, setData] = useState(null);
 useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/capstone.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      setData(jsonData);
      console.log(jsonData);
    } catch (error) {
      console.error('Fetching data failed', error);
    }
  };

  fetchData();
}, []);
  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      style={[styles.item]}
      onPress={() => setSelectedItem(index)}
    >
      <CategoryMenu
        text={item}
        isenble={selectedItem === index ? true : false}
      />
    </TouchableOpacity>
  );

  const renderCategoryComponent = ({ item, index }) => (
    <TouchableOpacity onPress={() => setSelectedItem(index)}>
      <CategoryComponent  name={item.name} description={item.description} price={item.price} image={item.image} />
    </TouchableOpacity>
  );

  return (
    <ScrollView>
      <View style={styles.mainContiner}>
        <HeaderCopmonent text={"Home"} />
        <CustomSpace hight={5} />
        <View style={styles.main}>
          <View style={styles.continerRow}>
            <View style={styles.continer}>
              <Text style={styles.titelText}>Little Lemon</Text>
              <Text style={styles.suptitelText}>section</Text>
              <Text style={styles.smalText}>
                The next step is to design the Menu Breakdown block. The owner
                of Little Lemon wants customers to have the option of filtering
                the menu categories. Make sure to:
              </Text>
            </View>
            <Image
              source={require("../assets/images/Hero image.png")}
              style={styles.image}
            />
          </View>
          <CustomSpace hight={10} />
          <CustomTextInput
            icon={"search"}
            placeholder={"Greek Salad ........"}
          />
        </View>
        <CustomSpace hight={10} />
        <Text style={styles.textHeader}>Menu Categories</Text>
        <FlatList
          data={listCategoryMenu}
          renderItem={renderItem}
          horizontal={true}
          keyExtractor={(item, index) => index.toString()}
        />
        <CustomSpace hight={10} />
        <FlatList
 data={data ? data.menu : []} // Check if data is not null before accessing data.menu
 renderItem={renderCategoryComponent}
 scrollEnabled={false}
 keyExtractor={(item, index) => index.toString()}
/>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textHeader: {
    fontFamily: "Karla-Bold",
    fontSize: 25,
    marginLeft: 10,
    marginBottom: 15,
  },
  continer: {
    width: "50%", // Adjusted to ensure it doesn't take up the entire width
  },
  continerRow: {
    flexDirection: "row",
    // Aligns children horizontally
    alignContent: "center",
    alignItems: "center",
  },
  item: {
    width: 100,
    marginHorizontal: 10, // Adjust this value to increase or decrease the space between items
    borderRadius: 10, // Optional: rounded corners
  },
  main: {
    backgroundColor: "#495E57",
    padding: 20,
    alignContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: "100%",
    height: "27%",
  },

  titelText: {
    fontFamily: "Karla-Bold",
    fontSize: 25,
    color: "#F4CE14",
  },
  suptitelText: {
    fontFamily: "Karla-Regular",
    fontSize: 20,
    color: "#D9D9D9",
  },
  smalText: {
    fontFamily: "Karla-Regular",
    fontSize: 15,
    color: "#D9D9D9",
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 10,
  },
  mainContiner: {
    alignContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
});

export default Home;
