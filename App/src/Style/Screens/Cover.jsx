import { StyleSheet } from "react-native";

export default StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent:"flex-end",
        alignItems: "flex-end"
    },
    textContainer: {
        title: {
            color: "black",
            fontSize: 30,
            fontWeight: "700",
            marginBottom: 10
        },
        subtitle: {
            color: "black",
            fontSize: 16,
            fontWeight: "500",
            textAlign: "right"
        },
        position: "absolute",
        width: "75%",
        top: "42%",
        alignSelf: "center",
    },
    continueBtn: {
        text: {
            color: "black",
            fontSize: 22,
            fontWeight: "600",
            marginRight: 10
        },
        image: {
            height: 32,
            width: 32
        },
        marginRight: 40,
        marginBottom: 80,
        flexDirection: "row",
        alignItems:"center"
    }
})