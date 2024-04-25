import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
const CustomCheckBox = ({name, toggleCheckBox, setToggleCheckBox }) => {
   

    return (
        <View style={styles.container}>

            <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />
            <Text style={styles.label}>{name}</Text>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignContent:'flex-start',
        alignSelf:'flex-start',
        marginLeft:30,
        marginBottom:5
    },
    checkboxContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: 'center',
    },
    label: {
        marginLeft: 8,
        marginTop:5,
        fontFamily: "Karla-Regular",
        fontSize:16
    },
});

export default CustomCheckBox;