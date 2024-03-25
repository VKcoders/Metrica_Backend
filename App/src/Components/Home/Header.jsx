import { useContext } from "react";
import { Global } from "../../Context";
import { View, Text, Image } from "react-native";

import { screens as styles } from "../../Style";
import { strings, icons } from "../../Localized";

function Header({pendent}) {
    const { user } = useContext(Global);
    const css = styles["Header"];
    const localized = strings["Home"].component;

    return (
        <View style={css.container}>
            <Image style={css.avatar} source={icons.avatar} />
            <View style={css.status}>
                <Text style={css.status.title}>{localized.greeetings(user.name)}</Text>
                {
                    pendent !== 0 ? (
                        <Text style={css.status.subtitle}>{localized.status(pendent)}</Text>
                    ) :(
                        <Text style={css.status.subtitle}>{localized.noSearch}</Text>
                    ) 
                }
            </View>
        </View>
    )
}

export default Header;