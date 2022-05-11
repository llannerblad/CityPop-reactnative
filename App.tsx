import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./app/screens/HomeScreen";
import CitySearch from "./app/screens/CitySearch";
import CountrySearch from "./app/screens/CountrySearch"
import resultsScreen from "./app/screens/ResultsScreen";
import CityResults from "./app/screens/CityResults";
import { colors } from "./Styles";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                  headerStyle: {
                    backgroundColor: colors.background_color,
                  },
                  headerTintColor: colors.text_light,
                  headerTitleStyle: {
                    fontWeight: "bold",
                    color: colors.text_light,
                  },
                  headerBackTitle: "CityPop",
                  title: "",
                  headerShown: false,
                }}
            >
              <Stack.Screen name="Home" component={HomeScreen}/>
              <Stack.Screen name="City" component={CitySearch} />
              <Stack.Screen name ="Country" component= {CountrySearch} />
              <Stack.Screen name ="Result" component= {resultsScreen} />
              <Stack.Screen name ="CityResults" component= {CityResults} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

