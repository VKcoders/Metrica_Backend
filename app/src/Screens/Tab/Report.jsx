import { SafeAreaView, Text, TouchableOpacity, Image } from "react-native";

import { screens as styles } from "../../Style";
import { strings, icons } from "../../Localized";

function Report({route: { name }, navigation: { navigate }}) {
    const localized = strings[name];
    const css = styles[name];

    const mock = false

    return !mock ? (
        <SafeAreaView style={css.noReport}>
            <TouchableOpacity style={css.newReport}>
                <Text style={css.newReport.text}>{localized.new}</Text>
                <Image source={icons.add} style={css.newReport.icon} />
            </TouchableOpacity>
        </SafeAreaView>
    ) : (
        <Text>Tem Ocorrencia</Text>
    )
}

export default Report;