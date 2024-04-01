import { StyleSheet } from "react-native";

export default StyleSheet.create({
    screen: {
        flex: 1,
    },
    title: {
        alignSelf: "center",
        fontSize: 18,
        fontWeight: "700",
        marginTop: 60,
        color: "black",
        marginBottom: 50
    },
    searchContainer: {
        container: {
            backgroundColor: "#708090",
            padding: 10,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10,
        },
        title: {
            backgroundColor: "#708090",
            fontSize: 16,
            color: "black",
            fontWeight: "700",
            width: "60%",
            textAlign: "center",
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            padding: 10
        },
        noData: {
            padding: 20,
            textAlign: "center",
            fontWeight: "600",
        },
        marginBottom: 20,
        padding: 10,
    },
})