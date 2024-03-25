import { StyleSheet } from "react-native";

export default StyleSheet.create({
    note: {
        flex: 1,
        backgroundColor: "#F3E5AB"
    },
    add: {
        icon: {
            width: 30,
            height: 30,
            tintColor: "white",
            alignSelf: "center"
        },
        backgroundColor: "#E1C16E",
        padding: 6
    },
    noNotes: {
        justifyContent:"center",
        alignItems: "center",
    },
    newNote: {
        text: {
            color: "black",
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

        backgroundColor: "#E1C16E",
        padding: 12,
        borderRadius: 10
    },

})