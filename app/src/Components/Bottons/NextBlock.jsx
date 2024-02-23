import { Text, TouchableOpacity } from "react-native";

import { screens as styles } from "../../Style";
import { strings } from "../../Localized";

function NextBlock({action}) {
    const css = styles["NextBlock"];
    const localized = strings["btns"].confirm;

    return (
        <TouchableOpacity style={css.container} onPress={() => action()}>
            <Text style={css.text}>{localized}</Text>
        </TouchableOpacity>
    )
}

export default NextBlock;