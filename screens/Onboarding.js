import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const Onboarding = () => {
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');

 const handleLogin = () => {
    // Here you can handle the login logic, e.g., validate credentials, call an API
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
      <Button title="Login" onPress={handleLogin} />
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
 },
 input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
 },
});

export default Onboarding;
