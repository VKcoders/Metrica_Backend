import { TextInput } from "react-native";
import { screens as styles } from "../../../Style";

import { NextBlock } from "../../Bottons";

function NormalText({ action, next }) {
    const css = styles["NormalText"];

    return (
        <>
            <TextInput 
                style={css.textInput}
                placeholder="resposta..."
                onChangeText={action}
            />
            <NextBlock action={next.func} text={next.text} />
        </>
    )
}

export default NormalText;