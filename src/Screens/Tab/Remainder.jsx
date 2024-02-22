import { SafeAreaView, Text } from "react-native";

function Remainder({route: { name }, navigation: { navigate }}) {
    return (
        <SafeAreaView>
            <Text>{name}</Text>
        </SafeAreaView>
    )
}

export default Remainder;