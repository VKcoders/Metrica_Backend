import { useEffect, useContext } from "react";
import { Global } from "../../Context";
import { SafeAreaView, View, Text, TouchableOpacity, Image, BackHandler } from "react-native";

import { screens as styles } from "../../Style";
import { strings, icons } from "../../Localized";
import Background from "../../Components/Background";

function Cover({route: { name }, navigation: { navigate }}) {
    const { token } = useContext(Global)
    const localized = strings[name];
    const css = styles[name];

    useEffect(() => {
        function RemoveBackHandler() {
            BackHandler.addEventListener('hardwareBackPress', () => true);
            }
            RemoveBackHandler();
    }, [])

    const handlePress = () => {
        if (!!token) {
            navigate("HomeTab");
            return
        };
        navigate("Login");
        return
    }

    return (
        <>
            <Background index={"1"} />
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
        </>
    )
}

export default Cover;