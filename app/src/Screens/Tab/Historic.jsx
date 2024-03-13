import { useCallback, useContext, useState } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { Global } from "../../Context";
import { SafeAreaView, ScrollView, Text } from "react-native";

import Background from "../../Components/Background";
import { Search } from "../../Components/Home";
import { screens as styles } from "../../Style";
import { strings } from "../../Localized";

function Historic({ route: { name } }) {
    const { history } = useContext(Global);
    const localized = strings[name];
    const css = styles[name];

    useFocusEffect(
        useCallback(() => {
            console.log(history)
        }, [])
    );

    return history.length === 0 ? (
        <>
            <Background index={"5"} />
            <SafeAreaView style={css.noHistory}>
                <Text style={css.noHistory.text}>{localized.noHistory}</Text>
            </SafeAreaView>
        </>
    ) : (
        <>
            <Background index={"1"} />
            <ScrollView>
                <Text style={[css.noHistory.text, {padding: 10}]}>Total Concluido: {history.length < 10 ? "0" + history.length : history.length} !!</Text>
                {
                    history.map((data, i) => <Search key={"search-" + i} nav={null} data={data} />)
                }
            </ScrollView>
        </>
    )
}

export default Historic;