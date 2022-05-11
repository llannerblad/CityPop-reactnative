import React, { Dispatch } from "react";
import {Ionicons} from '@expo/vector-icons'; 
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    } from 'react-native';
import * as css from '../../Styles';

interface Props {
    onPress: ()=> void; 
    title: string; 
    input: string; 
    setInput: Dispatch<React.SetStateAction<string>>; 
    placeholder: string; 

}

// A component that takes input from the user and sets input to text. 
// When the TouchableOpacity is pressed onPress-function is called. 
export const SearchComponent = ({ onPress, title, input, setInput, placeholder }: Props) => {
    return (
        <View style={[css.global.container, css.global.transparent]}>
                <View style={css.global.titleBox}>
                    <Text style={css.global.title2}>{title}</Text>
                </View>
                <TextInput
                placeholderTextColor={"grey"}
                style={css.global.input}
                onChangeText={(text) => {
                    setInput(text); 
                }}
                value={input}
                placeholder={placeholder}
                />
            <TouchableOpacity onPress={() => { onPress();}}>
                <Ionicons 
                name="search-circle" 
                size={60} color={css.colors.button_bg} />
            </TouchableOpacity>
            </View>
    );
}


