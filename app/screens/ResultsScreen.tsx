import React, { useEffect, useState } from "react";
import {useRoute} from "@react-navigation/native"; 
import {
    View,
    Text,
    SafeAreaView,
    ActivityIndicator,
} from "react-native";
import * as css from "../../Styles";
import CustomButton from "../components/CustomButton";

interface FuncProp {
    navigation: any; 
}
// Fetches data from the Api.Displays the search result to the user. 
//If theres a match in the api the population of the city is
// displayed, otherwise a message is shown and suggest to the user 
//to do a new search. 
export default function ResultsScreen ({navigation}: FuncProp) {
    const [isLoading, setLoading] = useState(true);
    const [isValidCity, setIsValidCity] = useState(false); 
    const [CityName, setCityName] = useState();
    const [population, setPopulation] = useState();
    const route = useRoute();
    const input = route?.params?.input;


    // Checks if text matches any city in the api. If text is valid it fetches data and sets 
    // cityName and population. If no match was found isValidCity is set to false. 
    async function fetchData(text: any) {
        try {
            text = text.toLowerCase(); 
            const response = await fetch(
                `http://api.geonames.org/searchJSON?name_equals=${text}&maxRows=15&username=weknowit`
            );
            const json = await response.json();
            const string = "city, village,..."; 
            console.log(json)

            if(json.totalResultsCount === 0) {
                setIsValidCity(false); 
            }
            else if ((json.geonames[0].fclName === string) &&
                (json.geonames[0].population !== 0)
            ) {
                setIsValidCity(true);
                setCityName(json.geonames[0].name.toUpperCase());
                setPopulation(json.geonames[0].population); 
            }
            } catch (error) {
            console.error(error);
            } finally {
            setLoading(false);
            }
        }

    useEffect(() => {
        fetchData(input); 
    }, []); 


    // Indicates that content is loading
    if (isLoading) {
        return (
        <SafeAreaView style={css.global.container}>
            <ActivityIndicator/>
        </SafeAreaView>
        )
    }

    else if (!isValidCity) {
        return (
            <SafeAreaView style={css.global.container}>
            <View>{
                <Text style={css.global.title2}>Not a valid city!</Text>}
            </View>
                <CustomButton
                    text="Try Again"
                    backgroundColor={css.colors.button_bg}
                    onPress={() => navigation.navigate("City")}/>
            </SafeAreaView>
        )
    }
    else {
    return (
        <SafeAreaView style={css.global.container}>
            <View>{
                <Text style={css.global.title2} >{CityName}</Text>}
            </View>
            <View style={css.global.box}>
                <Text style={css.global.description}>Population</Text>
                <Text style={css.global.boxContent}> {population}</Text>
            </View>
        </SafeAreaView>
    )}
}
