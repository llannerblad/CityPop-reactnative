import React, { useState } from "react";
import { View } from "react-native";
import * as css from "../../Styles";
import { Ionicons } from "@expo/vector-icons";
import { SearchComponent } from "../components/SearchComponent";
import CustomButton from "../components/CustomButton";


interface Props {
    text: string; 
}

interface FuncProps {
    navigation: any;
}

export default function CitySearch({navigation}: FuncProps) {
    const [input, setInput] = useState("");

    const search = () => {
        console.log(typeof(input))
        navigation.navigate("Result", {input:input});
    }

    return (
        <View style={css.global.container}>
            <CustomButton 
                text="CityPop" 
                backgroundColor="transparent" 
                onPress={()=>navigation.navigate("Home")}/>
            <SearchComponent 
                title="SEARCH BY CITY"
                placeholder="Enter A City" 
                setInput={setInput}
                input={input}
                onPress={search}      
                />
        </View>
    );
}
