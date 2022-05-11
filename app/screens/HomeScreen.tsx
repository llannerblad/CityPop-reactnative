import React from "react";
import { SafeAreaView, Text, View } from "react-native";

import CustomButton from "../components/CustomButton";
import * as css from "../../Styles";

interface Props {
    navigation: any;
}

// Displays the search options to the user. 
function HomeScreen({ navigation }: Props) {
    return (
        <SafeAreaView style={css.global.container}>
        <View style={css.global.container}>
            <Text style={css.global.title1}>CityPop</Text>
            <CustomButton
            text="Search By City"
            backgroundColor={css.colors.button_bg}
            onPress={() => navigation.navigate("City")}
            />
            <CustomButton
            text="Search By Country"
            backgroundColor={css.colors.button_bg}
            onPress={() => navigation.navigate("Country")}
            />
        </View>
        </SafeAreaView>
    );
}

export default HomeScreen;
