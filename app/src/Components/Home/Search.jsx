import { View, Text, Image, TouchableOpacity } from "react-native";

import { screens as styles } from "../../Style";
import { strings, icons } from "../../Localized";

function Search({data, nav}) {
    const { client_id, qtd_done, qtd_goal, search_id } = data
    const localized = strings["Home"].component;
    const css = styles["Search"];
    
    const porcent = ((qtd_done / qtd_goal) * 100).toFixed(0);
    const iconType = porcent <= 30 ? "atention" : (porcent < 100 ? "warning" : "done");

    const handlePress = () => {
        console.log(search_id)
        // nav("Search")
    }

    return (
        <TouchableOpacity style={css.container} onPress={handlePress}>
            <View style={css.containerUp}>
                <View>
                    <Text style={css.text}>{client_id}</Text>
                    <Text style={css.text}>{localized.completion(qtd_done, qtd_goal)}</Text>
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