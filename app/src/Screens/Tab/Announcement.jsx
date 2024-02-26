import { SafeAreaView, Text } from "react-native";

import Background from "../../Components/Background";
import { screens as styles } from "../../Style";
import { strings } from "../../Localized";

function Announcement({route: { name }, navigation: { navigate }}) {
    const localized = strings[name];
    const css = styles[name];

    const mock = false

    return !mock ? (
        <>
            <Background index={"7"} />
            <SafeAreaView style={css.noAnnouncement}>
                <Text style={css.noAnnouncement.text}>{localized.noAnnouncement}</Text>
            </SafeAreaView>
        </>
    ) : (
        <>
            <Background index={"5"} />
            <Text>Tem Avisos</Text>
        </>
    )
}

export default Announcement;