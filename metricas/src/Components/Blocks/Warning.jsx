import { Text, View } from "react-native";

import { screens as styles } from "../../Style";
import { strings } from "../../Localized";
import Background from "../Background";
import { NextBlock } from "../Bottons";

function Warning({ next }) {
    const css = styles["Warning"];
    const localized = strings["Warning"];

    return (
        <>
            <Background index={"4"} />
            <View style={css.container}>
                <Text style={css.text}>{localized}</Text>
                <NextBlock action={next} text={"Concordar"} />
            </View>
        </>
    )
}

export default Warning;