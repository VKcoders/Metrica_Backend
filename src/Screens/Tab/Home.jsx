import { SafeAreaView, Text } from "react-native";

function Login({route: { name }, navigation: { navigate }}) {
    return (
        <SafeAreaView>
            <Text>{name}</Text>
        </SafeAreaView>
    )
}

export default Login;