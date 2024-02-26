import { useContext } from "react";
import { Global } from "../../Context";
import { TouchableOpacity, Text, Image } from "react-native";

import { screens as styles } from "../../Style";
// import { strings, icons } from "../../Localized";

function RemainderCard({note: {note, id, created}}) {
    const css = styles["RemainderCard"];
    // const localized = strings["Home"].component;

    console.log(note, id, created)

    return (
        <TouchableOpacity style={css.container}>
            <Text style={css.text}>{note}</Text>
            <Text style={css.date}>{created}</Text>
        </TouchableOpacity>
    )
}

export default RemainderCard;