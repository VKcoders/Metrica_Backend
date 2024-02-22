import { useState, useEffect } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView } from "react-native";

import { screens as styles } from "../../Style";
import { strings } from "../../Localized";
import Background from "../../Components/Background";

function Login({route: { name }, navigation: { navigate }}) {
    const [info, setInfo] = useState({username: '', password: ''});
    const [canSubmit, setCanSubmit] = useState(false);
    const localized = strings[name];
    const css = styles[name];

    useEffect(() => {
        const {username, password} = info;

        if (username.length > 4 && password.length > 4) {
            setCanSubmit(true);
            return;
        }

        setCanSubmit(false);
    }, [info])

    const handleSubmit = () => {
        navigate("HomeTab", { info })
    }

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
        <>
            <Background index={"2"} />
            <SafeAreaView style={css.screen}>
                <KeyboardAvoidingView style={css.infoContainer} behavior="position">
                    { inputModel("username") }
                    { inputModel("password") }
                    <TouchableOpacity disabled={!canSubmit} style={[css.submitBtn, !!canSubmit && {backgroundColor: "#0096FF"}]} onPress={handleSubmit}>
                        <Text style={css.submitBtn.text}>{localized.submitBtn}</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </>
    )
}

export default Login;