import { Text, View, TextInput } from "react-native";

import { screens as styles } from "../../Style";
import Background from "../../Components/Background";
import { NextBlock } from "../Bottons";

function Introduction({nav, next, data}) {
    const css = styles["Introduction"];

    return (
        <>
            <Background index={"2"} />
            <View style={css.container}>
                <Text style={css.title}>Informação Pessoais</Text>
                <View >
                    <View style={css.question}>
                        <Text style={css.question.text}>{data["section_02"].q01}</Text>
                        <TextInput
                            style={css.question.placeholder}
                            placeholder={"nome completo"}
                            // onChangeText={handleChange}
                            placeholderTextColor="rgba(0, 0, 0, 0.2)"
                        />
                    </View>


                    <View style={css.question}>
                        <Text style={css.question.text}>{data["section_02"].q02}</Text>
                        <TextInput
                            style={css.question.placeholder}
                            placeholder={"00"}
                            // onChangeText={handleChange}
                            placeholderTextColor="rgba(0, 0, 0, 0.2)"
                            keyboardType="numeric"
                        />
                    </View>


                    <View style={css.question}>
                        <Text style={css.question.text}>{data["section_02"].q03}</Text>
                        <TextInput
                            style={css.question.placeholder}
                            placeholder={"masculino / feminino"}
                            // onChangeText={handleChange}
                            placeholderTextColor="rgba(0, 0, 0, 0.2)"
                            keyboardType="numeric"
                        />
                    </View>

            



                </View>

          
                <View style={css.btn}>
                    <NextBlock action={next} text={"Proximo"} />
                </View>
            </View>
        </>
    )
}

export default Introduction;