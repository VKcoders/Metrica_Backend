import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("screen");

export default StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    infoContainer: {
        width: width * 0.85,
        padding: 10
    },
    input: {
        text: {
            fontSize: 18,
            fontWeight: "500",
            marginBottom: 10
        },
        value: {
            fontSize: 16,
            fontWeight: "500",
            textAlign: "center",
            marginBottom: 5
        },
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: "black"
    },
    submitBtn: {
        text: {
            fontSize: 18,
            fontWeight: "600",
            textAlign: "center"
        },
        backgroundColor: "gray",
        width: 100,
        padding: 10,
        marginTop: 20,
        alignSelf: "flex-end",
        borderRadius: 10
    }
})