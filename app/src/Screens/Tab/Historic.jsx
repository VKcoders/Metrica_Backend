import { SafeAreaView, Text } from "react-native";

import Background from "../../Components/Background";
import { screens as styles } from "../../Style";
import { strings } from "../../Localized";

function Historic({route: { name }, navigation: { navigate }}) {
    const localized = strings[name];
    const css = styles[name];

    const mock = false

    return !mock ? (
        <>
            <Background index={"5"} />
            <SafeAreaView style={css.noHistory}>
                <Text style={css.noHistory.text}>{localized.noHistory}</Text>
            </SafeAreaView>
        </>
    ) : (
        <>
            <Background index={"1"} />
            <Text>Tem Historico</Text>
        </>
    )
}

export default Historic;