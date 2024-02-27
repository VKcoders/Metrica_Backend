import { useEffect, useContext, useState } from "react";
import { Global } from "../../Context";
import { SafeAreaView, ScrollView, View, BackHandler, Text } from "react-native";

import Background from "../../Components/Background";
import Loader from "../../Components/Loader";
import { Header, Search } from "../../Components/Home";
import { screens as styles } from "../../Style";

import { getAllStatus } from "../../Service/User";

function Home({route: { name }, navigation: { navigate }}) {
    const [list, setList] = useState([]);
    const [loader, setLoader] = useState(true);
    const [pendent, setPendent] = useState(0);
    const { user: {id}, token } = useContext(Global);

    const css = styles[name];

    useEffect(() => {
        async function Jobs() {
            const statusData = await getAllStatus(id, token);
            const filterPendent = statusData.filter(search => search.qtd_done !== search.qtd_goal);

            setList(statusData);
            setPendent(filterPendent.length);
            setTimeout(() => {
                setLoader(false);
            }, 750);
        }
        Jobs()
        
        BackHandler.addEventListener('hardwareBackPress', () => true);
        return () => BackHandler.removeEventListener('hardwareBackPress', () => true);
    }, []);

    return !loader ? (
        <>
            <Background index={"2"} />
            <SafeAreaView style={css.screen}>
                <ScrollView>
                    <Header pendent={pendent} />
                    <View style={css.bar} />
                        {
                            list.length < 1 ? (
                                <Text>SEM POESQUISA</Text>
                            ) : (
                                list.map((data, i) => <Search key={"search-" + i} nav={navigate} data={data} />)
                            )
                        }
                </ScrollView>
            </SafeAreaView>
        </>
    ) : (
        <Loader />
    )
}

export default Home;