import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        backgroundColor: "#36454F",
        alignSelf: "center",
        width: width * 0.80,
        height: height * 0.10,
        borderRadius: 10,
        padding: 15,
        marginTop: 10,

        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
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