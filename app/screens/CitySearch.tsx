import React, { useState } from "react";
import { View, SafeAreaView } from "react-native";
import * as css from "../../Styles";
import { Ionicons } from "@expo/vector-icons";
import { SearchComponent } from "../components/SearchComponent";
import BackButton from "../components/BackButton";

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
        <SafeAreaView style={css.global.container}>
            <BackButton 
            text="CityPop" 
            icon={<Ionicons name="arrow-back" size={60} color={css.colors.button_bg} />}
            onPress={() => navigation.navigate("Home")}
            />
            <SearchComponent 
            title="SEARCH BY CITY"
            placeholder="Enter A City" 
            setInput={setInput}
            input={input}
            onPress={search}      
            />
        </SafeAreaView>
    );
}
