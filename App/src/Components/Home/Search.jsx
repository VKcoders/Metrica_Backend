import { View, Text, Image, TouchableOpacity } from "react-native";

import { screens as styles } from "../../Style";
import { strings, icons } from "../../Localized";

function Search({data, nav}) {
    const { done, goal, search: id } = data;
    const localized = strings["Home"].component;
    const css = styles["Search"];
    
    const porcent = ((done / goal) * 100).toFixed(0);
    const iconType = porcent <= 30 ? "atention" : (porcent < 100 ? "warning" : "done");

    const handlePress = () => nav("Search", { searchId: id });

    return (
        <TouchableOpacity disabled={nav === null} style={css.container} onPress={handlePress}>
            <View style={css.containerUp}>
                <View>
                    <Text style={css.text}>{localized.completion(done, goal)}</Text>
                </View>
                <Image 
                    style={css.icon} 
                    source={icons.status[iconType]}
                />
            </View>
            {
                porcent > 0 && (
                    <View style={[css.containerDown, {width: porcent > 10 ? `${localized.porcent(porcent)}` : "10%"}]}> 
                        <Text style={css.containerDown.text}>{localized.porcent(porcent)}</Text>
                    </View>
                ) 
            }
        </TouchableOpacity>
    )
}

export default Search;