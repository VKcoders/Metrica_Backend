import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

export default StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
    },
    container: {
        padding: 10,
        borderRadius: 20,
        width: width * 0.9,
        height: height * 0.25,
        backgroundColor: "white",
        justifyContent: "space-around",
        alignItems: "center"
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: "rgba(0, 0, 0, 0.2)",
        color:"black",
        width: "100%"
    },
    btn: {
        text: {
            color: "white",
            fontSize: 14,
            fontWeight: "500"
        },
        backgroundColor: "blue",
        padding: 10,
        borderRadius: 10
    }
})