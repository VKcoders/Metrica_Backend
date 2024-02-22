import { SafeAreaView, Text } from "react-native";

function Historic({route: { name }, navigation: { navigate }}) {
    return (
        <SafeAreaView>
            <Text>{name}</Text>
        </SafeAreaView>
    )
}

export default Historic;