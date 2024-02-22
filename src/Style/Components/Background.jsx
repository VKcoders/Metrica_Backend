import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    backgroundColor: 'white',
    position: 'absolute',
    height,
    width,
})