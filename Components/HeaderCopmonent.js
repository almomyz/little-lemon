import { View, StyleSheet, Image, Text, Pressable, ScrollView, ActivityIndicator } from 'react-native';
const HeaderCopmonent = ({text}) => {
return (

    <View style={styles.header}>
               <Text style={styles.textHeader}>{text}</Text>
            </View>
)

}
const styles = StyleSheet.create({

    header: {
        width: 400,
        height: 72,
        backgroundColor: '#D9D9D9',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 5,
        marginBottom: 5,
        marginHorizontal:10,
        marginVertical:10
     },
     textHeader: {
        fontFamily: "Karla-Bold",
        fontSize: 25
     },
})

export default HeaderCopmonent;