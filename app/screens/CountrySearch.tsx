import React, { useState } from "react";
import { View } from "react-native";
import * as css from "../../Styles";
import { Ionicons } from "@expo/vector-icons";
import { SearchComponent } from "../components/SearchComponent";

interface FuncProp {
    navigation: any, 
}
export default function CountrySearch({navigation}: FuncProp) {
    const [input, setInput] = useState("");

    const search = () => {
    navigation.navigate("CityResults", {input: input});
    }

    return (
        <View style={css.global.container}>
            <SearchComponent 
                title="SEARCH BY COUNTRY"
                placeholder="Enter A Country" 
                setInput={setInput}
                input={input}
                onPress={search}      
            />
        </View>
    );
}