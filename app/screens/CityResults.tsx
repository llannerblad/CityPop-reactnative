import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native"; 
import {
    Text,
    SafeAreaView,
    ActivityIndicator,
} from "react-native";
import * as css from "../../Styles";
import Geonames from 'geonames.js'; /* es module */
import CustomButton from "../components/CustomButton";
import BackButton from "../components/BackButton"
import { Ionicons } from "@expo/vector-icons";

interface FuncProps {
    navigation: any,
}

interface SearchProps {
    input: string; 
}


// Displays the three biggest cities for the searched country. If the country 
//does not exist,a message is shown that suggests the user to do a new search. 
export default function CityResults({navigation}: FuncProps) {
    const [isValidCountry, setIsValidCountry] = useState(false); 
    const [citiesList] = useState<string[]>([]); 
    const [isLoading, setLoading] = useState(true);
    const route = useRoute();
    const [input, setInput] = useState(route.params?.input);
    const [countryName, setCountryName] = useState();  
    const geonames = Geonames({
        username: 'weknowit',
        lan: 'en',
        encoding: 'JSON'
    });

    // Navigates to ResultsScreen and sends along the user input. 
    function search(input: SearchProps) {
        navigation.navigate("Result", {input: input});
    }

    // If the user input is valid, the api fetches the three biggest cities 
    //for the desired country. Otherwise the isValidCountry is set to false. 
    async function fetchCities(text: any) {
        try {
            text = text.toLowerCase();
            const countries = await geonames.search({q: text});  
    
            if(countries.totalResultsCount === 0) {
                setIsValidCountry(false); 
            }
            else if (countries.geonames[0].countryName.toLowerCase() === text) {
                setIsValidCountry(true); 
                const cities = await geonames.search({country: countries.geonames[0].countryCode});
                const string = "city, village,..."; 
                const arr = cities.geonames.filter((d: { fclName: string | string[]; }) => 
                    d.fclName.includes(string)); 
                
                arr.sort((a:any, b:any) => a.population < b.population ? 1 : -1 )
                setCountryName(arr[0].countryName.toUpperCase()); 
                citiesList.push(arr[0].name);
                citiesList.push(arr[1].name);
                citiesList.push(arr[2].name);
            }
            
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchCities(input); 
    }, []); 

    // Indicates that content is loading
    if (isLoading) {
        return (
            <SafeAreaView style={css.global.container}>
                <ActivityIndicator/>
            </SafeAreaView>
        )
    } 
    else if (!isValidCountry){
        return(
        <SafeAreaView style={css.global.container}>
                <Text style={css.global.title2}>Not A Valid Country!</Text>
                <CustomButton
                text="New search"
                backgroundColor={css.colors.button_bg}
                onPress={() => navigation.navigate("Country")}
                />
        </SafeAreaView>
        );
    }   else {
        return (
            <SafeAreaView style={css.global.container}>
                <BackButton 
                text="CityPop" 
                icon={<Ionicons name="arrow-back" size={60} color={css.colors.button_bg} />}
                onPress={() => navigation.navigate("Home")}
                />
                <Text style={css.global.title2} >{countryName}</Text>
                <CustomButton
                text={citiesList[0]}
                backgroundColor={css.colors.button_bg}
                onPress={() =>  search(input)}
                onPressIn={() => setInput(citiesList[0])}
                />                  
                <CustomButton
                text={citiesList[1]}
                backgroundColor={css.colors.button_bg}
                onPress={() =>  search(input)}
                onPressIn={() => setInput(citiesList[1])}
                />
                <CustomButton
                text={citiesList[2]}
                backgroundColor={css.colors.button_bg}
                onPress={() =>  search(input)}
                onPressIn={() => setInput(citiesList[2])}
                />
            </SafeAreaView>
        ); 
    }
}