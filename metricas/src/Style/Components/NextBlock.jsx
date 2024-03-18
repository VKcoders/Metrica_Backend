import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        backgroundColor: "#36454F",
        padding: 15,
        borderRadius: 10,
        marginTop: 20,
        marginRight: 30,
        alignSelf: "flex-end"
    },
    text: {
        color: "#E9DCC9",
        fontSize: 16,
        fontWeight: "400"
    }
})