import { SafeAreaView, Text, TouchableOpacity, Image } from "react-native";

import { screens as styles } from "../../Style";
import { strings, icons } from "../../Localized";

function Remainder({route: { name }, navigation: { navigate }}) {
    const localized = strings[name];
    const css = styles[name];

    const mock = false

    return !mock ? (
        <SafeAreaView style={css.noNotes}>
            <TouchableOpacity style={css.newNote}>
                <Text style={css.newNote.text}>{localized.new}</Text>
                <Image source={icons.add} style={css.newNote.icon} />
            </TouchableOpacity>
        </SafeAreaView>
    ) : (
        <Text>Tem Notas</Text>
    )
}

export default Remainder;