import { SafeAreaView, Text } from "react-native";

import { screens as styles } from "../../Style";
import { strings } from "../../Localized";

function Historic({route: { name }, navigation: { navigate }}) {
    const localized = strings[name];
    const css = styles[name];

    const mock = false

    return !mock ? (
        <SafeAreaView style={css.noHistory}>
            <Text style={css.noHistory.text}>{localized.noHistory}</Text>
        </SafeAreaView>
    ) : (
        <Text>Tem Historico</Text>
    )
}

export default Historic;