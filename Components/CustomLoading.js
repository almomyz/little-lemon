
import { View, StyleSheet,ActivityIndicator,Text } from 'react-native';
import Modal from 'react-native-modal';
const CustomLoading = ({isModalVisible, text }) => {
   

    return (
        <Modal isVisible={isModalVisible} style={styles.modal} backdropColor="#000000" backdropOpacity={0.5}>
        <View style={styles.modalContent}>
            <ActivityIndicator size="large" color="#495E57" />
            <Text style={styles.modalText}>{text}</Text>
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
    modalText: {
        marginTop: 15,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
})
export default CustomLoading;