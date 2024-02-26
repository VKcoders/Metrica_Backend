import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

export default StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
    container: {
        padding: 10,
        borderRadius: 20,
        width: width * 0.8,
        height: height * 0.2,
        backgroundColor: "white",
        justifyContent: "space-around",
        alignItems: "center"
    },
    message: {
        width: "100%",
        color: "black",
        fontSize: 18,
        textAlign: "center"
    },
    btn: {
        text: {
            color: "white",
            fontSize: 14,
            fontWeight: "500"
        },
        backgroundColor: "blue",
        padding: 9,
        borderRadius: 10
    }
})