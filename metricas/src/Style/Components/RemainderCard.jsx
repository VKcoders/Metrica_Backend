import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        padding: 10,
        borderBottomColor: 'rgba(0, 0, 0, 0.15)',
        borderBottomWidth: 1,
        marginTop: 10
    },
    text: {
        color: "black",
        textAlign: "center"
    },
    date: {
        marginTop: 15,
        fontSize: 10,
        color: "black",
        textAlign: "right"
    },
    input: {
        color: "black",
        fontSize: 16,
        fontWeight: "500",
        flexGrow: 1
    },
})