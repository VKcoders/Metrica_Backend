import { SafeAreaView, View, Text, TouchableOpacity, TextInput, Image } from "react-native";

import ToggleMenu from "../Components/ToggleMenu";
import Background from "../Components/Background";

function Home({route: { name }, navigation: { navigate }}) {
    return (
        <>
            <Background index={"1"} />
            <ToggleMenu currentLocation={name} />
        </>
    );
}

export default Home;