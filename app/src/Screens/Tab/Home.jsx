import { useEffect, useContext, useState } from "react";
import { Global } from "../../Context";
import { SafeAreaView, ScrollView, View, BackHandler, Image, TouchableOpacity } from "react-native";

import Background from "../../Components/Background";
import { Header, Search } from "../../Components/Home";
import { screens as styles } from "../../Style";
import { icons } from "../../Localized";

// import { getAllStatus } from "../../Service/User";

function Home({route: { name }, navigation: { navigate }}) {
    const [list, setList] = useState([]);
    const [pendent, setPendent] = useState(0);
    const { user: {id}, token } = useContext(Global);

    const css = styles[name];

    useEffect(() => {
        // async function Jobs() {
        //     const statusData = await getAllStatus(id, token);
        //     const filterPendent = statusData.filter(search => search.qtd_done !== search.qtd_goal);
        //     setList(statusData);
        //     setPendent(filterPendent.length);
        // }
        // Jobs()
        
        BackHandler.addEventListener('hardwareBackPress', () => true);
        return () => BackHandler.removeEventListener('hardwareBackPress', () => true);
    }, []);

    return (
        <>
            <Background index={"2"} />
            <SafeAreaView style={css.screen}>
                <ScrollView>
                    <Header pendent={pendent} />
                    <View style={css.bar} />
                    {
                        list.length < 1 ? (
                            <View style={css.reload}>
                                <TouchableOpacity onPress={() => console.log("reload")}>
                                    <Image source={icons.reload} style={css.reload.icon} />
                                </TouchableOpacity>
                            </View>
                        ) : (
                            list.map((data, i) => <Search key={"search-" + i} nav={navigate} data={data} />)
                        )
                    }
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default Home;