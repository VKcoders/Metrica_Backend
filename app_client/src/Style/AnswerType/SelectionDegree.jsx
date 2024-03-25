import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
        marginBottom: 30
    },
    option: {
        text: {
            fontWeight: "800"
        },
        btn: {
            marginTop: 10,
            borderRadius: 100,
            borderColor: "black",
            borderWidth: 1.5,
            width: 30,
            height: 30
        },
        marginTop: 20,
        alignItems: "center"
    }
})