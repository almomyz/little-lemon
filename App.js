import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Login() {
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');

 const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
 };

 return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
 );
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
 },
 input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 10,
    width: '100%',
 },
 button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
 },
 buttonText: {
    color: 'white',
    textAlign: 'center',
 },
});
