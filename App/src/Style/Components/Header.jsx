import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: width * 0.9,
        height: height * 0.15,
        marginTop: 30
    },
    avatar: {
        height: "90%",
        width: 110,
        borderRadius: 1200
    },
    status: {
        title: {
            color: "black",
            fontSize: 18,
            fontWeight: "800",
            marginBottom: 10,
        },
        subtitle: {
            color: "black",
            fontSize: 16,
            fontWeight: "600"
        },
        alignItems: "center"
    }
})