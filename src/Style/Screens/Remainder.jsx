import { StyleSheet } from "react-native";

export default StyleSheet.create({
    noNotes: {
        flex: 1,
        justifyContent:"center",
        alignItems: "center",
    },
    newNote: {
        text: {
            fontSize: 18,
            fontWeight: "600"
        },
        icon: {
            width: 20,
            height: 20,
            marginLeft: 15
        },
        flexDirection: "row",
        justifyContent:"center",
        alignItems: "center",

        backgroundColor: "#6F8FAF",
        padding: 12,
        borderRadius: 10
    }
})