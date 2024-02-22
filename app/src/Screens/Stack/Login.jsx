import { useState, useEffect, useContext } from "react";
import { Global } from "../../Context";
import { SafeAreaView, View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, Image } from "react-native";

import { screens as styles } from "../../Style";
import { strings, icons } from "../../Localized";
import Background from "../../Components/Background";

import { generateToken } from "../../Service/Token";

function Login({route: { name }, navigation: { navigate }}) {
    const { setToken, setWorker } = useContext(Global);   
    const [info, setInfo] = useState({username: '', password: ''});
    const [hidePassword, setHidePassword] = useState(true);
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

    const handleSubmit = async () => {
        const { status, token, name } = await generateToken(info);

        if (!!status) {
            setToken(token);
            setWorker(name);
            navigate("HomeTab");
            return
        }
    }

    const inputModel = (type) => {
        
        const handleChange = (value) => setInfo(p => ({...p, [type]: value}));

        return (
            <View style={css.input}>
                <Text style={css.input.text}>{localized[type][0]}</Text>
                <View style={css.input.innerContainer}>
                    <TextInput
                        style={css.input.value}
                        placeholder={localized[type][1]}
                        onChangeText={handleChange}
                        placeholderTextColor="rgba(0, 0, 0, 0.2)"

                        secureTextEntry={type === "password" ? hidePassword : false}
                    />
                    {
                        type === "password" && (
                            <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
                                <Image
                                    style={css.input.icon}
                                    source={icons.lock[!hidePassword ? "open" : "close"]}
                                />
                            </TouchableOpacity>
                        )
                    }
                </View>
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