import React, { useEffect, useState } from "react";
import {useRoute} from "@react-navigation/native"; 
import {
    View,
    Text,
    SafeAreaView,
    ActivityIndicator,
} from "react-native";
import * as css from "../../Styles";
import Geonames from 'geonames.js'; /* es module */
import CustomButton from "../components/CustomButton";
import { Ionicons } from "@expo/vector-icons";
import BackButton from "../components/BackButton"

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
    const geonames = Geonames({
        username: 'weknowit',
        lan: 'en',
        encoding: 'JSON'
    });


    // Checks if text matches any city in the api. If text is valid it fetches data and sets 
    // cityName and population. If no match was found isValidCity is set to false. 
    async function fetchData(text: any) {
        try {
            text = text.toLowerCase(); 
            const string = "city, village,..."; 
            const response = await geonames.search({name_equals: text});  
            
            if(response.totalResultsCount === 0 || (/\d/.test(text))) {
                setIsValidCity(false); 
            }
            else if ((response.geonames[0].fclName === string) && 
                (response.geonames[0].population !== 0)
            ) {
                setIsValidCity(true);
                setCityName(response.geonames[0].name.toUpperCase());
                setPopulation(response.geonames[0].population); 
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
                <Text style={css.global.title1}>Not a valid city!</Text>
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
            <BackButton 
            text="CityPop" 
            icon={<Ionicons name="arrow-back" size={30} color={css.colors.button_bg} />}
            onPress={() => navigation.navigate("Home")}
            />
            <Text style={css.global.title1} >{CityName}</Text>
            <View style={css.global.box}>
                <Text style={css.global.description}>Population</Text>
                <Text style={css.global.boxContent}> {population}</Text>
            </View>
        </SafeAreaView>
    )}
}
