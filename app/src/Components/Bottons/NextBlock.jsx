import { Text, TouchableOpacity } from "react-native";

import { screens as styles } from "../../Style";
import { strings } from "../../Localized";

function NextBlock({action, text}) {
    const css = styles["NextBlock"];
    const localized = strings["btns"].confirm;

    return (
        <TouchableOpacity style={css.container} onPress={() => action()}>
            <Text style={css.text}>{text}</Text>
        </TouchableOpacity>
    )
}

export default NextBlock;