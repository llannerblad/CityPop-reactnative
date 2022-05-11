import { StyleSheet } from "react-native";

export const colors = {
    background_color: "#1A1A40",
    button_bg: "#3e57fe",
    text_light: "#f2f2f2", 
    text_dark: "#2b2d3f",
};

export const global = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: colors.background_color,
    },

    titleBox: {
        width: "50%", 
        textAlign: "center",
        marginBottom: "10%",
        marginTop: "8%",
    },

    title1: {
        fontSize: 32,
        color: colors.text_light,
        marginBottom: "20%",
        marginTop: "40%",
        fontWeight: 'bold',
    },
    
    title2: {
        textAlign: "center",
        fontSize: 32,
        color: colors.text_light,
        marginBottom: "20%",
        marginTop: "30%",
        fontWeight: 'bold',
    },

    border: {
        borderBottomColor: colors.text_dark,
    },

    input: {
        width: 340,
        height: "9%",
        padding: 15,
        //borderColor: 'rgba(0, 0, 0, 0.2)',
        borderColor: "#f2f2f2",
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
        color: colors.text_light,
        },

    box: {
        width: '90%',
        borderColor: 'rgba(0, 0, 0, 0.2)',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
        alignItems: 'center',
        backgroundColor: colors.button_bg,
        color: colors.text_light,
    },


    boxContent: {
        fontSize: 32,
        padding: 10, 
        color: colors.text_light,
    },

    description: {
        fontSize: 24,
        padding: 10,
        color: colors.text_light,
    },

    buttonText: {
        fontSize: 20,
        color: colors.text_light,
        textAlign: 'center',

    },

    buttonContainer: {
        shadowColor: "black",
        shadowOpacity: 6,
        elevation: 1,
        shadowRadius: 30,
        shadowOffset : { width: 1, height: 20},
        backgroundColor: "rebeccapurple",
        height: "10%",
        width:'90%', 
        margin: 2,
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 6,
        flexDirection: 'row',
    },

    center: {
        alignItems: 'center',
    },
});
