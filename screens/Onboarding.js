import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Image, Text, ScrollView, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomTextInput from '../Components/CustomTextInput';
import CustomButton from '../Components/CustomButton';
import CustomLoading from '../Components/CustomLoading';
import ErrorDialog from '../Components/ErrorDialog.js';
import { useNavigation } from '@react-navigation/native';
const Onboarding = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false); // New state variable for loading status
    const [isModalVisible, setIsModalVisible] = useState(false);
    const navigation = useNavigation();
    const handleLogin = async () => {
        setIsLoading(true);
        setIsModalVisible(true); // Show the modal
        try {
            await AsyncStorage.setItem('IsLogin', "true");
            await AsyncStorage.setItem('Email', username);
            await AsyncStorage.setItem('Password', password);
          const islogin=     await AsyncStorage.getItem('IsLogin');
            console.log("IsLogin",islogin)
            setTimeout(() => {
                setIsLoading(false);
                setIsModalVisible(false); // Hide the modal after 5 seconds
                navigation.navigate('Profile')
            }, 5000);
        } catch (e) {
            console.error("Error in setting item in AsyncStorage:", e);
            setIsLoading(false);
            setIsModalVisible(false); // Hide the modal immediately if there's an error
        }
    };
    const hideModal = () => {
        setIsModalVisible(false);
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
                    Sgin in
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
                            name={"Email"}
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

                    <View style={styles.buttonContainer}>
                        <CustomButton name={"Sign In"} onPress={handleLogin} width={160} />
                    </View>
                </View>
            </View>
            <CustomLoading
        isModalVisible={isModalVisible}
        text="Loading........"
        onClose={hideModal}
      />

        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#FFFFFF'
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
        fontSize: 30,
        marginBottom: 50,
        alignSelf: 'center',
        justifyContent: 'center'

    },
    textBold: {
        fontFamily: "Poppins-Bold",
        fontSize: 25,
        marginBottom: 120,
        alignSelf: 'center',
        justifyContent: 'center'

    },
    containerLogin: {
        borderRadius: 10,
        backgroundColor: '#D9D9D9',
        marginLeft: 20,
        marginRight: 20,
        padding: 10,
        width: 378,
        height: 441,
        justifyContent: 'flex-start',

    },
    textInput: {
        fontFamily: "Karla-Regularr",
        fontSize: 20,
        marginBottom: 5,
    },
  
    buttonContainer: {
        marginTop: 30,
        alignItems: "center",
    },
});

export default Onboarding;
