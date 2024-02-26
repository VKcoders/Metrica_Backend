import { useState } from "react";

import { Text, View, TextInput } from "react-native";

import { screens as styles } from "../../Style";
import Background from "../../Components/Background";
import { NextBlock } from "../Bottons";

function Political({nav, next, data}) {
    const [i, setI] = useState(1)
    const css = styles["Political"];
    
    const handleFinish = () => {
        nav("Home")
    }

    const handleNext = () => {
        setI(i + 1)
    }

    const handleQuestios = {
        1: () => (
            <View style={css.question}>
                <Text style={css.question.text}>De 01 a 05, onde um é muito ruim e cinco é muito bom. 
Que nota você daria para:</Text>
                <View style={{marginTop: 20, flexDirection: "row", alignItems: "center"}}>
                    <Text style={css.question.text}>Educação: </Text>
                    <TextInput
                        style={css.question.placeholder}
                        placeholder={"01 - 05"}
                        // onChangeText={handleChange}
                        placeholderTextColor="rgba(0, 0, 0, 0.2)"
                        keyboardType="number-pad"
                    />
                </View>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Text style={css.question.text}>Saúde: </Text>
                    <TextInput
                        style={css.question.placeholder}
                        placeholder={"01 - 05"}
                        // onChangeText={handleChange}
                        placeholderTextColor="rgba(0, 0, 0, 0.2)"
                        keyboardType="number-pad"
                    />
                </View>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Text style={css.question.text}>Transporte Público: </Text>
                    <TextInput
                        style={css.question.placeholder}
                        placeholder={"01 - 05"}
                        // onChangeText={handleChange}
                        placeholderTextColor="rgba(0, 0, 0, 0.2)"
                        keyboardType="number-pad"
                    />
                </View>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Text style={css.question.text}>Turismo: </Text>
                    <TextInput
                        style={css.question.placeholder}
                        placeholder={"01 - 05"}
                        // onChangeText={handleChange}
                        placeholderTextColor="rgba(0, 0, 0, 0.2)"
                        keyboardType="number-pad"
                    />
                </View>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Text style={css.question.text}>Segurança: </Text>
                    <TextInput
                        style={css.question.placeholder}
                        placeholder={"01 - 05"}
                        // onChangeText={handleChange}
                        placeholderTextColor="rgba(0, 0, 0, 0.2)"
                        keyboardType="number-pad"
                    />
                </View>
                
            </View>
        ),
        2: () => (
            <View style={css.question}>
                <Text style={css.question.text}>Em um dado com 06 vértices sendo que cada uma das vértices tem um nome de um possível candidato a prefeito.</Text>
                <View style={{marginTop: 40, flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                    <Text style={css.question.text}>Em quem você votaria: </Text>
                    <TextInput
                        style={[css.question.placeholder, {flexGrow: 0, marginLeft: 15}]}
                        placeholder={"nome do prefeito"}
                        // onChangeText={handleChange}
                        placeholderTextColor="rgba(0, 0, 0, 0.2)"
                        keyboardType="number-pad"
                    />
                </View>
            </View>
        ),
        3: () => (
            <View style={css.question}>
                <Text style={css.question.text}>Em um dado com 06 vértices sendo que cada uma das vértices tem um nome de um possível candidato a vereador.</Text>
                <View style={{marginTop: 40, flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                    <Text style={css.question.text}>Em quem você votaria: </Text>
                    <TextInput
                        style={[css.question.placeholder, {flexGrow: 0, marginLeft: 15}]}
                        placeholder={"nome do vereador"}
                        // onChangeText={handleChange}
                        placeholderTextColor="rgba(0, 0, 0, 0.2)"
                        keyboardType="number-pad"
                    />
                </View>
            </View>
        ),
        4: () => (
            <View style={css.question}>
                <Text style={css.question.text}>Qual o nome do atual prefeito da sua cidade?</Text>
                <View style={{marginTop: 40, flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                    <Text style={css.question.text}>Resposta: </Text>
                    <TextInput
                        style={[css.question.placeholder, {flexGrow: 0, marginLeft: 15}]}
                        placeholder={"nome do prefeito"}
                        // onChangeText={handleChange}
                        placeholderTextColor="rgba(0, 0, 0, 0.2)"
                        keyboardType="number-pad"
                    />
                </View>
            </View>
        ),
    }

    return (
        <>
            <Background index={"1"} />
            <View style={css.container}>
                <Text style={css.title}>Perguntas</Text>
                {handleQuestios[i]()}
                <View style={css.btn}>
                    {
                        i === 4 ? (
                                <NextBlock action={handleFinish} text={"Concluir"} />
                            ) : (
                                <NextBlock action={handleNext} text={"Proximo"} />
                        )
                    }
                </View>

            </View>
        </>
    )
}

export default Political;