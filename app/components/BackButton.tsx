import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import * as css from "../../Styles";

interface Props {
    text: string;
    icon: any;
    onPress: () => void;
}
const BackButton = ({text, icon, onPress,}: Props) => {

    return (
        <TouchableOpacity onPress={onPress}
        style={css.global.back}>
            <Text style={css.global.backButtonContent}>
                {icon}
                <Text style={css.global.backButtonText}>{text}</Text>   
            </Text>
        </TouchableOpacity>
    ); 
}; 

export default BackButton; 