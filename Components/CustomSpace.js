import { View } from 'react-native';
const CustomSpace = ({hight }) => {
   

    return (
        <View style={{flexDirection:'column', gap: hight }}>
            <View></View>
            <View></View>
            <View></View>
            <View></View>

        </View>

    );
};


export default  CustomSpace;