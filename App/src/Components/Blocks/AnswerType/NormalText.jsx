import { useState } from "react";
import { TextInput } from "react-native";
import { screens as styles } from "../../../Style";

import { NextBlock } from "../../Bottons";

function NormalText({ action, next, data }) {
    const [canSubmit, setCanSubmit] = useState(false)
    const css = styles["NormalText"];

    const handleChange = (t) => {
        if (t.length > 2) {
            setCanSubmit(true);
            action({id: data.question_id, value: t});
            return
        }
        setCanSubmit(false);
    }

    return (
        <>
            <TextInput 
                style={css.textInput}
                placeholder="resposta..."
                onChangeText={handleChange}
            />
            {/* { !!canSubmit && <NextBlock action={next.func} text={next.text} /> } */}
            <NextBlock action={next.func} text={next.text} />
        </>
    )
}

export default NormalText;