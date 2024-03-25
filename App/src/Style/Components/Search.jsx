import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        backgroundColor: "#36454F",
        alignSelf: "center",
        width: width * 0.80,
        borderRadius: 10,
        padding: 15,
        marginTop: 10,
    },
    containerUp: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    containerDown: {
        text: {
            color: "white",
            fontSize: 12,
            textAlign: "right",
            marginRight: 5
        },
        marginTop: 10,
        borderRadius: 20,
        padding: 2,
        backgroundColor: "#088F8F"
    },
    text: {
        color: "white",
        fontSize: 16,
        fontWeight: "500"
    },
    icon: {
        width: 35,
        height: 35
    }
})