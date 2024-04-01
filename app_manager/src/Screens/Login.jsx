import { useState, useEffect, useContext } from "react";
import { Global } from "../Context";
import { SafeAreaView, View, Text, TouchableOpacity, TextInput, Image } from "react-native";

import { generateToken } from "../Service/Token";

import { screens as styles } from "../Style";
import { strings, icons } from "../Localized";
import { Login as Modal } from "../Modal";

import Background from "../Components/Background";

function Login({route: { name }, navigation: { navigate }}) {
    const { setToken, setUser } = useContext(Global);
    const [info, setInfo] = useState({username: '', password: ''});
    const [modal, setModal] = useState(false);
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
    }, [info]);

    const handleSubmit = async () => {
        const { status, token, name, id } = await generateToken(info);
        if (!!status) {
            setToken(token);
            setUser({id, name});
            navigate("Home");
            return
        }
        setModal(true);
    }

    const inputModel = (type) => {
        const handleChange = (value) => setInfo(p => ({...p, [type]: value}));

        return (
            <>
                <Modal show={modal} action={setModal} reset={setInfo} />
                <View style={css.input}>
                    <Text style={css.input.text}>{localized[type][0]}</Text>
                    <View style={css.input.innerContainer}>
                        <TextInput
                            value={info[type]}
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
            </>
        )
    }

    return (
        <>
            <Background index={"2"} />
            <SafeAreaView style={css.screen}>
                <View style={css.infoContainer}>
                    <View style={css.title}>
                            <Image
                                style={css.title.icon}
                                source={icons.logo}
                            />
                        <Text style={css.title.text}>{localized.title}</Text>
                    </View>
                    { inputModel("username") }
                    { inputModel("password") }
                    <TouchableOpacity disabled={!canSubmit} style={[css.submitBtn, !!canSubmit && {backgroundColor: "#0096FF"}]} onPress={handleSubmit}>
                        <Text style={css.submitBtn.text}>{localized.submitBtn}</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </>
    )
}

export default Login;