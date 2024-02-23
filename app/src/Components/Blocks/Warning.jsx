import { Text, View } from "react-native";
import { NextBlock } from "../Bottons";

import { screens as styles } from "../../Style";
import { strings } from "../../Localized";
import Background from "../../Components/Background";

function Warning({nav, next}) {
    const css = styles["Warning"];
    const localized = strings["Warning"];

    return (
        <>
            <Background index={"2"} />
            <View style={css.container}>
                <Text style={css.text}>{localized}</Text>
                <NextBlock action={next} />
            </View>
        </>
    )
}

export default Warning;