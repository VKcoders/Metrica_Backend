import { useEffect } from "react";

import { SafeAreaView, ScrollView, View, BackHandler } from "react-native";

import Background from "../../Components/Background";
import { Header, Search } from "../../Components/Home";
import { screens as styles } from "../../Style";

function Home({route: { name }, navigation: { navigate }}) {
    const css = styles[name];

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => true);
        return () => BackHandler.removeEventListener('hardwareBackPress', () => true);
    }, []);

    return (
        <>
            <Background index={"2"} />
            <SafeAreaView style={css.screen}>
                <ScrollView>
                    <Header />
                    <View style={css.bar} />
                    <Search nav={navigate} total={200} done={50} />
                    <Search nav={navigate} total={100} done={100} />
                    <Search nav={navigate} total={300} done={230} />
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default Home;