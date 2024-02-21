import { SafeAreaView, View, Text, TouchableOpacity, Image } from "react-native";

import { screens as styles } from "../../Style";
import { strings, icons } from "../../Localized";

function Cover({route: { name }, navigation: { navigate }}) {
    const localized = strings[name];
    const css = styles[name];

    const handlePress = () => navigate("Login");

    return (
        <SafeAreaView style={css.screen}>
            <View style={css.textContainer}>
                <Text style={css.textContainer.title}>{localized.title}</Text>
                <Text style={css.textContainer.subtitle}>{localized.subtitle}</Text>
            </View>
            <TouchableOpacity style={css.continueBtn} onPress={handlePress}>
                <Text style={css.continueBtn.text}>{localized.continue[0]}</Text>
                <Image style={css.continueBtn.image} source={icons.arrow} alt={localized.continue[1]} />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Cover;