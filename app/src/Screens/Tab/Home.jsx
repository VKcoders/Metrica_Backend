import { useEffect, useContext, useState } from "react";
import { Global } from "../../Context";
import { SafeAreaView, ScrollView, View, BackHandler, Image, TouchableOpacity } from "react-native";

import Background from "../../Components/Background";
import { Header, Search } from "../../Components/Home";
import { screens as styles } from "../../Style";
import { icons } from "../../Localized";

import { getSearchsByUsers } from "../../Service/User";

function Home({route: { name }, navigation: { navigate }}) {
    const [list, setList] = useState({done: [], pending: []});
    const [pendingCounter, setPendingCounter] = useState(0);
    const { user: {id}, token } = useContext(Global);

    const css = styles[name];

    useEffect(() => {
        async function Jobs() {
            const listData = await getSearchsByUsers(id, token);
            const filterDone = listData.filter(({done, goal}) => done === goal);
            const filterPendent = listData.filter(({done, goal}) => done !== goal);
            
            setPendingCounter(filterPendent.length);
            setList({
                done: filterDone,
                pending: filterPendent
            });
        }
        Jobs();
        
        BackHandler.addEventListener('hardwareBackPress', () => true);
        return () => BackHandler.removeEventListener('hardwareBackPress', () => true);
    }, []);

    return (
        <>
            <Background index={"2"} />
            <SafeAreaView style={css.screen}>
                <ScrollView>
                    <Header pendent={pendingCounter} />
                    <View style={css.bar} />
                    {
                        list.pending.length < 1 ? (
                            <View style={css.reload}>
                                <TouchableOpacity onPress={() => console.log("reload")}>
                                    <Image source={icons.reload} style={css.reload.icon} />
                                </TouchableOpacity>
                            </View>
                        ) : (
                            list.pending.map((data, i) => <Search key={"search-" + i} nav={navigate} data={data} />)
                        )
                    }
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default Home;