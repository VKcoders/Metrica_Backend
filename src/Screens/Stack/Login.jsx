import { useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView } from "react-native";

import { screens as styles } from "../../Style";
import { strings } from "../../Localized";

function Login({route: { name }, navigation: { navigate }}) {
    const [info, setInfo] = useState({username: null, password: null})
    const localized = strings[name];
    const css = styles[name];

    const inputModel = (type) => {
        const handleChange = (value) => setInfo(p => ({...p, [type]: value}))

        return (
            <View style={css.input}>
                <Text style={css.input.text}>{localized[type][0]}</Text>
                <TextInput
                    style={css.input.value}
                    placeholder={localized[type][1]}
                    onChangeText={handleChange}
                    placeholderTextColor="rgba(0, 0, 0, 0.2)"
                    secureTextEntry={type === "password"}
                />
            </View>
        )
    }

    return (
        <SafeAreaView style={css.screen}>
            <KeyboardAvoidingView style={css.infoContainer} behavior="position">
                { inputModel("username") }
                { inputModel("password") }
                <TouchableOpacity style={css.submitBtn}>
                    <Text style={css.submitBtn.text}>{localized.submitBtn}</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default Login;