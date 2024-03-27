import { useContext, useEffect, useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, TextInput, ScrollView } from "react-native";

import ToggleMenu from "../Components/ToggleMenu";
import Background from "../Components/Background";
import Loader from "../Components/Loader";

import { screens as styles } from "../Style";
import { strings } from "../Localized";
import Card from "../Components/Cards/Search";
import { getAllMenagerSearchs } from "../Service/Search";

function Home({route: { name, params }, navigation: { navigate }}) {
    const [searchs, setSearchs] = useState([]);
    const [loader, setLoader] = useState(true);
    const localized = strings[name];
    const css = styles[name];

    useEffect(() => {
        async function Jobs() {
            const { token, clientId } = params;
            const getAllSearchs = await getAllMenagerSearchs(clientId, token);
            setSearchs(getAllSearchs);
            setLoader(false);
        };
        Jobs();
    }, []);


    return (
        <>
            <Background index={"1"} />
            {
                !!loader ? (
                    <Loader />
                    ) : (
                    <>
                        <ToggleMenu currentLocation={name} />
                        <ScrollView style={css.screen}>
                            <Text style={css.title}>{`${localized.hi} ${params.name}`}</Text>
                            <View style={css.searchContainer}>
                                <Text style={css.searchContainer.title}>Pesquisas Ativas</Text>
                                <View style={css.searchContainer.container}>
                                    {
                                        searchs.map((search, i) => <Card key={"search-" + i} data={search} token={params.token} />)
                                    }
                                    { searchs.length <= 0 && <Text style={css.searchContainer.noData}>Sem Pesquisa Ativa</Text> }
                                </View>
                            </View>
                            <View style={css.searchContainer}>
                                <Text style={css.searchContainer.title}>Historico</Text>
                            </View>
                        </ScrollView>
                    </>
                )
            }
        </>
    );
}

export default Home;