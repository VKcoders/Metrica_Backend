import { useEffect, useContext, useState, useCallback } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { Global } from "../../Context";
import { SafeAreaView, ScrollView, View, BackHandler, Image } from "react-native";

import Background from "../../Components/Background";
import { Header, Search } from "../../Components/Home";
import { screens as styles } from "../../Style";
import { icons } from "../../Localized";

import { getSearchsByUsers } from "../../Service/User";

function Home({route: { name }, navigation: { navigate }}) {
    const [list, setList] = useState({done: [], pending: []});
    const [pendingCounter, setPendingCounter] = useState(0);
    const { user: {id}, token, setHistory } = useContext(Global);

    const css = styles[name];

    useEffect(() => {        
        BackHandler.addEventListener('hardwareBackPress', () => true);
        return () => BackHandler.removeEventListener('hardwareBackPress', () => true);
    }, []);

    useFocusEffect(
        useCallback(() => {
            fetchData();
        }, [])
    );

    const fetchData = async () => {
        const listData = await getSearchsByUsers(id, token);
        const filterDone = listData.filter(({done, goal}) => done === goal);
        const filterPendent = listData.filter(({done, goal}) => done !== goal);

        filterDone.length === 0 ? setHistory([]) : setHistory(filterDone)

        setPendingCounter(filterPendent.length);
        setList({ done: filterDone, pending: filterPendent });
    }

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
                                <Image source={icons.logo} style={css.reload.icon} />
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