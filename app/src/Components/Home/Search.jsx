import { View, Text, Image, TouchableOpacity } from "react-native";

import { screens as styles } from "../../Style";
import { strings, icons } from "../../Localized";

function Search({total, done, nav}) {
    const localized = strings["Home"].component;
    const css = styles["Search"];
    const porcent = ((done / total) * 100).toFixed(0);
    const iconType = porcent <= 30 ? "atention" : (porcent < 100 ? "warning" : "done");

    const handlePress = () => {
        nav("Search")
    }

    return (
        <TouchableOpacity style={css.container} onPress={handlePress}>
            <View>
                <Text style={css.text}>{localized.region(".....")}</Text>
                <Text style={css.text}>{localized.completion(done, total, porcent)}</Text>
            </View>
            <Image 
                style={css.icon} 
                source={icons.status[iconType]}
            />
        </TouchableOpacity>
    )
}

export default Search;