import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import * as css from "../../Styles";
import { Ionicons } from "@expo/vector-icons";
import { SearchComponent } from "../components/SearchComponent";
import BackButton from "../components/BackButton"

interface FuncProp {
    navigation: any, 
}

export default function CountrySearch({navigation}: FuncProp) {
    const [input, setInput] = useState("");
    const search = () => {
        navigation.navigate("CityResults", {input: input});
    }

    return (
        <SafeAreaView style={css.global.container}>
            <BackButton 
            text="CityPop" 
            icon={<Ionicons name="arrow-back" size={30} color={css.colors.button_bg} />}
            onPress={() => navigation.navigate("Home")}
            />
            <SearchComponent 
            title="SEARCH BY COUNTRY"
            placeholder="Enter A Country" 
            setInput={setInput}
            input={input}
            onPress={search}      
            />
        </SafeAreaView>
    );
}