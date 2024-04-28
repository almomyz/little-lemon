
import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, Pressable, ScrollView, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MyCustomInput from '../Components/MyCustomInput';
import CustomCheckBox from '../Components/CustomCheckBox';
import CustomButton from '../Components/CustomButton';
import CustomSpace from '../Components/CustomSpace';
import * as ImagePicker from 'expo-image-picker';
import ImageViewer from '../Components/ImageViewer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from 'react-native-modal';
import { useNavigation } from '@react-navigation/native';
const Profile = () => {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [phone, setPhone] = useState('');
   const [toggleCheckBox1, setToggleCheckBox1] = useState(false)
   const [toggleCheckBox2, setToggleCheckBox2] = useState(false)
   const [toggleCheckBox3, setToggleCheckBox3] = useState(false)
   const [toggleCheckBox4, setToggleCheckBox4] = useState(false)
   const [selectedImage, setSelectedImage] = useState(null);
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const [isLoading, setIsLoading] = useState(false);
   const [isModalVisible, setIsModalVisible] = useState(false);
   const navigation = useNavigation();
   async function cachDate(name, data) {
      await AsyncStorage.setItem(name, data);
   }

   async function getCachData(name) {
      const data = await AsyncStorage.getItem(name) ?? "";
      return data;
   }

   async function saveChanges() {
      setIsLoading(true);
      setIsModalVisible(true);
      await cachDate("image", selectedImage);
      await cachDate("Email", username);
      await cachDate("Password", password);
      await cachDate("Phone", phone);
      setTimeout(() => {
         setIsLoading(false);
         setIsModalVisible(false); // Hide the modal after 5 seconds
      }, 5000);
   }

   React.useEffect(() => {
      const checkLogin = async () => {
         const email = await getCachData("Email");
         console.log("IsLoggedIn", email)
         setUsername(email);
         const password = await getCachData("Password");
         console.log("IsLoggedIn", password)
         setPassword(password);
         const phone = await getCachData("Phone");
         console.log("phone", phone)
         setPhone(phone);
         const image = await getCachData("image");
         console.log("IsLoggedIn", image)
         setSelectedImage(image);

      };

      checkLogin();
   }, []);
   const pickImageAsync = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
         allowsEditing: true,
         quality: 1,
      });

      if (!result.canceled) {
         setSelectedImage(result.assets[0].uri);
      } else {
         alert('You did not select any image.');
      }
   };

 async  function onPressFunction() {
     await AsyncStorage.clear();
      navigation.navigate('Onboarding');
      console.log("clear");
   }
   return (
      <ScrollView>
         <View style={styles.container}>
            <View style={styles.header}>
               <Text style={styles.textHeader}>Profile</Text>
            </View>


            <Pressable onPress={pickImageAsync}>
               <ImageViewer
                  placeholderImageSource={require("../assets/images/addProfilepng.png")}
                  selectedImage={selectedImage}
               />

               <View style={styles.edit}>
                  <Icon name="edit" size={20} color="#fff" style={styles.icon} />
               </View>
            </Pressable>
            <MyCustomInput
               icon={'email'}
               placeholder="example@gmail.com"
               onChangeText={setUsername}
               value={username}
               name={"Email"}

            />
            <MyCustomInput
               placeholder="***************"
               onChangeText={setPassword}
               value={password}
               secureTextEntry
               name={"Password"}
               icon={"key"}
            />

            <MyCustomInput
               icon={'phone'}
               placeholder="+967 777  777 777"
               onChangeText={setPhone}
               value={phone}
               name={"Phone number"}
            />

            <Text style={styles.notificationText}>
               Email notification
            </Text>

            <CustomCheckBox
               name={"Order statuses"}
               setToggleCheckBox={setToggleCheckBox1}
               toggleCheckBox={toggleCheckBox1}
            />
            <CustomCheckBox
               name={"Password changes"}
               setToggleCheckBox={setToggleCheckBox2}
               toggleCheckBox={toggleCheckBox2}
            />
            <CustomCheckBox
               name={"Special offers"}
               setToggleCheckBox={setToggleCheckBox3}
               toggleCheckBox={toggleCheckBox3}
            />
            <CustomCheckBox
               name={"Newsletters"}
               setToggleCheckBox={setToggleCheckBox4}
               toggleCheckBox={toggleCheckBox4}
            />
            <CustomSpace
               hight={5}
            />
            <CustomButton
               name={"Log out"}
               height={43}
               width={373}
               onPress={onPressFunction}
            />
            <CustomSpace
               hight={5}
            />

            <View style={{ flexDirection: "row" }} >
               <CustomButton
                  name={"Discard changes"}
                  height={43}
                  width={180}
                  marginRight={30}
                  onPress={onPressFunction}
                  color={"#495E57"}
               />
               <CustomButton
                  name={"save changes"}
                  height={43}
                  width={180}
                  onPress={saveChanges}
               />
            </View>
         </View>
         <Modal isVisible={isModalVisible} style={styles.modal} backdropColor="#000000" backdropOpacity={0.5}>
            <View style={styles.modalContent}>
               <ActivityIndicator size="large" color="#0000ff" />
               <Text style={styles.modalText}>Loading...</Text>
            </View>
         </Modal>
      </ScrollView>




   );
};

const styles = StyleSheet.create({
   
   container: {
      backgroundColor: '#fff', // This is a light blue color. Change it to your desired color.
      alignItems: 'center',
      flexDirection: 'column',
      flex: 1
   },
   containerImage: {
      height: 150,
      width: 500,
      backgroundColor: '#F4CE14', // is is a light blue color. Change it to your desired color.
      alignItems: 'center',
   },
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
   textHeader: {
      fontFamily: "Karla-Bold",
      fontSize: 25
   },
   edit: {
      position: 'absolute',
      top: 100,
      right: 40,
      zIndex: 2,
      backgroundColor: '#F4CE14',
      width: 33,
      height: 33,
      alignContent: 'center',
      justifyContent: 'center',
      borderRadius: 25,

   },
   header: {
      width: 400,
      height: 72,
      backgroundColor: '#D9D9D9',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      marginTop: 5,
      marginBottom: 5
   },
   icon: {
      alignSelf: 'center',
      color: "#fff",

   },
   notificationText: {

      fontFamily: "Karla-Bold",
      fontSize: 20,
      alignContent: 'flex-start',
      alignSelf: 'flex-start',
      marginLeft: 20,
      marginTop: 0,
      marginBottom: 10

   },
   modalContent: {
      backgroundColor: '#FFFFFF',
      padding: 50,
      borderRadius: 10,
      width: '80%',
     
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
  },
  modalText: {
      marginTop: 15,
      textAlign: 'center',
      fontSize: 18,
      fontWeight: 'bold',
  },
});

export default Profile;
