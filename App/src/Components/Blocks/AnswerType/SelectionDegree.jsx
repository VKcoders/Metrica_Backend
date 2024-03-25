import { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";

import { screens as styles } from "../../../Style";
import { NextBlock } from "../../Bottons";
import { strings } from "../../../Localized";

function SelectionDegree({data, next, action}) {
    const [selected, setSelected] = useState();
    const css = styles["SelectionDegree"];
    const localized = strings.Degrees;

    // console.log(data) /// vir como array e implementar

    const handlePress = (num) => {
        setSelected(num)
        action({id: data.question_id, value: num})
    }

    return (
        <>
            <View style={css.container}>
                {
                    Array.from({length: 5}).map((_e, i) => {
                        const key = "degree-" + i;
                        return (
                            <View key={key} style={css.option}>
                                { i === 0 && <Text style={css.option.text}>{localized[0]}</Text> }
                                { i === 2 && <Text style={css.option.text}>{localized[1]}</Text> }
                                { i === 4 && <Text style={css.option.text}>{localized[2]}</Text> }
                                <TouchableOpacity
                                    onPress={() => handlePress(i + 1)}
                                    style={[css.option.btn, selected === i + 1 && {backgroundColor: "gray"}]}
                                />
                            </View>
                        )
                    })
                }
            </View>
            {/* { !!selected && <NextBlock action={next.func} text={next.text} /> } */}
            <NextBlock action={next.func} text={next.text} />
        </>
    )
}

export default SelectionDegree;