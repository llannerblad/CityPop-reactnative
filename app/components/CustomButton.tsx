import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import * as css from "../../Styles";


interface Props {
    text: string; 
    backgroundColor: string;
    onPress: () => void;  
    onPressIn?: () => void; 
}
const CustomButton = ({text, backgroundColor, onPress, onPressIn}: Props) => {

    return (
        <TouchableOpacity onPress={onPress} onPressIn={onPressIn} 
        style={[css.global.buttonContainer, {backgroundColor}]}>
            <View style={{flex:1}}>
                <Text style={css.global.buttonText}>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    ); 
}; 
const styles =StyleSheet.create ({
    buttonText: {
        fontSize: 15,
        // fontFamily: 'NunitoSans-Black',
        color: '#f2f2f2',
        textAlign: 'center',

    },

    buttonContainer: {
        backgroundColor: '#f2f2f2',
        height: 50,
        width:'90%', 
        margin: 10,
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 6,
        flexDirection: 'row',
    },
});

export default CustomButton; 