import { useState, useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { screens as styles } from "../../../Style";

function SelectionText({ data, next, action }) {
    const [options, setOptions] = useState([]);
    const [selected, setSelected] = useState(false);
    
    const css = styles["SelectionText"];
    
    useEffect(() => {
        const array = data.answer.split(',');
        setOptions(array);
    }, []);

    const handlePress = (key, text) => {
        action({ id: data.question_id, value: text });
        if (key === selected) {
            next.func();
            return;
        }
        setSelected(key);
    }

    return (
        <View style={css.constainer}>
            {
                options.map((text, index) => {
                    const key = "question-" + index;
                    return (
                        <TouchableOpacity 
                            key={key}
                            style={[css.btn, key === selected && {backgroundColor: "green"}]}
                            onPress={() => handlePress(key, text)}
                        >
                            <Text style={css.btn.text}>{text}</Text>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}

export default SelectionText;