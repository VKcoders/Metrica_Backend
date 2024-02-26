import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"space-between"
    },
    title: {
        padding: 20,
        marginTop: 40,
        textAlign: "center",
        color: "black",
        fontSize: 22,
        fontWeight: "800",
    },
    question: {
        text: {
            color: "black",
            fontSize: 18,
            height: "auto",
            fontWeight: "700",
            textAlign: "justify"
        },
        placeholder: {
            color: "black",
            fontSize: 18,
            fontWeight: "500",
            textAlign: "right",
            flexGrow: 1
        },
        color: "black",
        padding: 20,
        marginBottom: 10
    },
    btn: {
        marginBottom: 35,
    }
})