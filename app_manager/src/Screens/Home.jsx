import { useEffect, useState, useContext } from "react";
import { Global } from "../Context";
import { View, Text, ScrollView } from "react-native";

import ToggleMenu from "../Components/ToggleMenu";
import Background from "../Components/Background";
import Loader from "../Components/Loader";

import { screens as styles } from "../Style";
import { strings } from "../Localized";
import CardSearch from "../Components/Cards/Search";
// import CardHistory from "../Components/Cards/History";
import { getAllMenagerSearchs } from "../Service/Search";
import { getByClientId } from "../Service/History";

function Home({route: { name }, navigation: { navigate }}) {
    const { token, user, searchs, setSearchs } = useContext(Global);
    const [history, setHistory] = useState([]);
    const [loader, setLoader] = useState(true);
    const localized = strings[name];
    const css = styles[name];

    useEffect(() => {
        async function Jobs() {
            const getAllSearchs = await getAllMenagerSearchs(user.id, token);
            const getHistory = await getByClientId(user.id, token);

            setSearchs(getAllSearchs);
            setHistory(getHistory);
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
                        <ToggleMenu currentLocation={name} nav={navigate} />
                        <ScrollView style={css.screen}>
                            <Text style={css.title}>{`${localized.hi} ${user.name}`}</Text>
                            <View style={css.searchContainer}>
                                <Text style={css.searchContainer.title}>{localized.searchTopics[0]}</Text>
                                <View style={css.searchContainer.container}>
                                    {
                                        searchs.map((search, i) => <CardSearch key={"search-" + i} data={search} nav={navigate} i={1} />)
                                    }
                                    { searchs.length <= 0 && <Text style={css.searchContainer.noData}>{localized.noResult}</Text> }
                                </View>
                            </View>

                            <View style={css.searchContainer}>
                                <Text style={css.searchContainer.title}>{localized.searchTopics[1]}</Text>
                                <View style={css.searchContainer.container}>
                                    {/* {
                                        history.map((search, i) => <CardSearch key={"search-" + i} data={search} nav={navigate} />)
                                    } */}
                                    { history.length <= 0 && <Text style={css.searchContainer.noData}>{localized.noResult}</Text> }
                                </View>
                            </View>
                        </ScrollView>
                    </>
                )
            }
        </>
    );
}

export default Home;