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
            <View>
                <Text style={css.global.backButtonContent}>
                {icon}{text}
                </Text>
            </View>
        </TouchableOpacity>
    ); 
}; 

export default BackButton; 