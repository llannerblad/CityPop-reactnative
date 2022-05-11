import { StyleSheet } from "react-native";

export const colors = {
    background_color: "#1A1A40",
    button_bg: "#3e57fe",
    text_light: "#f2f2f2", 
    text_dark: "#2b2d3f",
};

export const global = StyleSheet.create({
    container: {
        position: "relative",
        flex: 1,
        alignItems: "center",
        backgroundColor: colors.background_color,
    },

    backButtonContent: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: colors.text_light,
        fontSize: 22,
    },

    titleBox: {
        width: "60%", 
        textAlign: "center",
        marginBottom: "10%",
        marginTop: "30%",
    },

    title1: {
        fontSize: 32,
        color: colors.text_light,
        marginBottom: 60,
        marginTop: 150,
        fontWeight: 'bold',
    },
    
    title2: {
        textAlign: "center",
        fontSize: 32,
        color: colors.text_light,
        marginBottom: 40,
        marginTop: 40,
        fontWeight: 'bold',
    },

    border: {
        borderBottomColor: colors.text_dark,
    },

    input: {
        width: 340,
        height: 60,
        padding: 15,
        borderColor: colors.text_light,
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
        color: colors.text_light,
        },

    transparent: {
        backgroundColor: "transparent",
    },

    back: {
        position: "absolute",
        zIndex: 100,
        left: 0,
        top: 40,
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
        maxWidth: 340,
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
        flexDirection: "row",

    },

    buttonContainer: {
        backgroundColor: "rebeccapurple",
        height: "10%",
        width:'90%', 
        margin: 2,
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 6,
        flexDirection: 'row',
        maxWidth: 340,
    },

    center: {
        alignItems: 'center',
    },
});
