import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "green",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: "black",
        fontSize: 22,
        fontWeight: "600",
        textAlign: "justify"
    }

})