import { SafeAreaView, Text, TouchableOpacity, Image } from "react-native";

import { screens as styles } from "../../Style";
import { strings } from "../../Localized";

function Announcement({route: { name }, navigation: { navigate }}) {
    const localized = strings[name];
    const css = styles[name];

    const mock = false

    return !mock ? (
        <SafeAreaView style={css.noAnnouncement}>
            <Text style={css.noAnnouncement.text}>{localized.noAnnouncement}</Text>
        </SafeAreaView>
    ) : (
        <Text>Tem Avisos</Text>
    )
}

export default Announcement;