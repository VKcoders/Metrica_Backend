import { SafeAreaView, ScrollView, View } from "react-native";

import { Header, Search } from "../../Components/Home";
import { screens as styles } from "../../Style";
// import { strings } from "../../Localized";

function Home({route: { name }, navigation: { navigate }}) {
    // const localized = strings[name];
    const css = styles[name];

    return (
        <SafeAreaView style={css.screen}>
            <ScrollView>
                <Header />
                <View style={css.bar} />
                <Search total={200} done={50} />
                <Search total={100} done={100} />
                <Search total={300} done={230} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;