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
        innerContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
        },
        text: {
            color: "black",
            fontSize: 18,
            fontWeight: "500",
            marginBottom: 10
        },
        value: {
            color: "black",
            flexGrow: 1,
            fontSize: 16,
            fontWeight: "500",
            textAlign: "center",
            marginBottom: 5
        },
        icon: {
            width: 30,
            height: 30
        },
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: "black"
    },
    submitBtn: {
        text: {
            color: "black",
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