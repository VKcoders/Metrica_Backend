import { useContext } from "react";
import { Global } from "../../Context";
import { View, Text, Image } from "react-native";

import { screens as styles } from "../../Style";
// import { strings, icons } from "../../Localized";

function NoRemainder() {
    const css = styles["NoRemainderCard"];
    // const localized = strings["Home"].component;

    return (
        <View style={css.container}>
            
        </View>
    )
}

export default NoRemainder;