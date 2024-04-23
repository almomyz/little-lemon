
import React, { useState } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomTextInput from '../Components/CustomTextInput';
const Profile = () => {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');

   return (
      <View style={styles.container}>
         <View>
         <Image
            source={require('../assets/images/Profile.png')}
            style={styles.image}
         />

         <View style={styles.edit}>
            <Icon name="edit" size={20} color="#fff" style={styles.icon} />
         </View>
         </View>
         <View  style={styles.add}>
            <Text style={styles.textInput}>
               Email
            </Text>
            <CustomTextInput
               icon={'email'}
               placeholder="example@gmail.com"
               onChangeText={setUsername}
               value={username}
               name={"email"}

            />

         </View>

      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#000000', // This is a light blue color. Change it to your desired color.
      alignItems: 'center',
   },
   image: {
      width: 150,
      height: 150,
      zIndex: 1
   },
   edit: {
      position: 'absolute',
      top: 130,
      zIndex: 2,
      backgroundColor: '#F4CE14',
      width: 33,
      height: 33,
      alignContent: 'center',
      justifyContent: 'center',
      borderRadius: 25,

   },
   icon: {
      alignSelf: 'center'
   },
   add:{
      position: 'relative',
      top: 0,
      left: 0,
      right: 20,
      bottom: 20,
      backgroundColor:"#fff",
      
   }
});

export default Profile;
