import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome';

const ErrorDialog = ({ isModalVisible, text, onClose }) => {
 return (
      <Modal isVisible={isModalVisible} style={styles.modal} backdropColor="#000000" backdropOpacity={0.5}>
          <View style={styles.modalContent}>
              <Icon name="exclamation-circle" size={40} color="#FF0000" style={styles.icon} />
              <Text style={styles.modalText}>{text}</Text>
              <TouchableOpacity onPress={onClose} style={styles.button}>
                 <Text style={styles.buttonText}>Close</Text>
              </TouchableOpacity>
          </View>
      </Modal>
 );
};

const styles = StyleSheet.create({
 modal: {
      justifyContent: 'center',
      alignItems: 'center',
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
 icon: {
      marginBottom: 20,
 },
 modalText: {
      marginTop: 15,
      textAlign: 'center',
      fontSize: 18,
      fontWeight: 'bold',
 },
 button: {
      marginTop: 20,
      backgroundColor: '#FF0000',
      padding: 10,
      borderRadius: 5,
 },
 buttonText: {
      color: '#FFFFFF',
      fontSize: 16,
      textAlign: 'center',
 },
});

export default ErrorDialog;
