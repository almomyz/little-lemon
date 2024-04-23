import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Image, Text,ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomTextInput from '../Components/CustomTextInput';
import CustomButton from '../Components/CustomButton';
import { useFonts } from 'expo-font';
const Onboarding = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (value) => {
        try {

            await AsyncStorage.setItem('IsLogin', "true");

        } catch (e) {
            console.error("Error in setting item in AsyncStorage:", e);
        }
    };

    return (
        <ScrollView>
        <View style={styles.container}>
            <Image
                source={require('../assets/images/Logo.png')}
                style={styles.logo}
            />
            <Text style={styles.textBold}>
                Welcome Back !
            </Text>
            <View style={styles.containerLogin}>
            <Text style={styles.text}>
            Login   
            </Text>
                   
                 <View>
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
                     <View>
                     <Text style={styles.textInput}>
                        Password
                    </Text>
                     <CustomTextInput
                        placeholder="***************"
                        onChangeText={setPassword}
                        value={password}
                        secureTextEntry
                        name={"Password"}
                        icon={"key"}
                      />

                     </View>
                    
                <CustomButton name={"Login"} onPress={handleLogin} />
            </View>


        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor:'#FFFFFF'
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 10,
    },
    logo: {
        marginTop: 40,
        marginBottom: 50,
        alignSelf: 'center',
        justifyContent: 'center'

    },
    text: {
        fontFamily: "Poppins-Bold",
        fontSize: 25,
        marginBottom:50,
        alignSelf: 'center',
        justifyContent: 'center'

    },
    textBold: {
        fontFamily: "Poppins-Bold",
        fontSize: 25,
        marginBottom:120,
        alignSelf: 'center',
        justifyContent: 'center'

    },
    containerLogin: {
        borderRadius: 10,
        backgroundColor: '#D9D9D9',
        marginLeft:20 ,
        marginRight: 20,
        padding:10,
        width: 378,
        height: 441,
        justifyContent: 'flex-start',
      
    },
    textInput: {
        fontFamily: "Karla-Regularr",
        fontSize: 20,
        marginBottom:5,
    },
});

export default Onboarding;
