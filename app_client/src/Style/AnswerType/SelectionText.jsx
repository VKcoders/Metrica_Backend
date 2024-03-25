import { StyleSheet } from "react-native";

export default StyleSheet.create({
    constainer: {
        width: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center"
    },
    btn: {
        text: {
            fontSize: 16,
            fontWeight: "600",
            textAlign: "center",
            
        },
        backgroundColor: "gray",
        borderRadius: 10,

        width: "48%",
        height: 60,
        marginBottom: 10,
        justifyContent: "center"
    }
})