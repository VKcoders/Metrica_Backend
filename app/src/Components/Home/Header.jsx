import { useContext } from "react";
import { Global } from "../../Context";
import { View, Text, Image } from "react-native";

import { screens as styles } from "../../Style";
import { strings, icons } from "../../Localized";

function Header() {
    const { worker } = useContext(Global);
    const css = styles["Header"];
    const localized = strings["Home"].component;

    const qtd = "2";

    return (
        <View style={css.container}>
            <Image style={css.avatar} source={icons.avatar} />
            <View style={css.status}>
                <Text style={css.status.title}>{localized.greeetings(worker)}</Text>
                <Text style={css.status.subtitle}>{localized.status(qtd)}</Text>
            </View>
        </View>
    )
}

export default Header;