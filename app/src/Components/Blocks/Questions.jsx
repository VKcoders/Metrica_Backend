import { useState } from "react";

import { Text, View } from "react-native";

import { screens as styles } from "../../Style";
import Background from "../Background";
import { NextBlock } from "../Bottons";

function Questions({ next }) {
    const css = styles["Political"];

    return (
        <>
            <Background index={"1"} />
            <View style={css.container}>
                <Text style={css.title}>Perguntas</Text>


                <View style={css.btn}>
                    <NextBlock action={next} text={"Proximo"} />
                </View>
            </View>
        </>
    )
}

export default Questions;