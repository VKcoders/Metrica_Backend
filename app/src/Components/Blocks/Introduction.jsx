import { useEffect, useState, useMemo } from "react";
import { Text, View, TextInput } from "react-native";

import { screens as styles } from "../../Style";
import Background from "../../Components/Background";
import Loader from "../../Components/Loader";
import { NextBlock } from "../Bottons";

import { getSearchIntro } from "../../Service/Search";

function Introduction({ next, introId, token }) {
    const [blockData, setBlockData] = useState({});
    const [keys, setKeys] = useState([]);
    const [blockIndex, setBlockIndex] = useState(0);
    const [loader, setLoader] = useState(true);
    const css = styles["Introduction"];
    
    useEffect(() => {
        async function Jobs() {
            const data = await getSearchIntro(introId, token);
            const paramkeys = Object.keys(data).slice(1)
            
            setKeys(paramkeys);
            setBlockData(data);
            setLoader(false);
        };
        Jobs();
    }, []);

    useMemo(() => {
        console.log(blockData[keys[blockIndex]].type)
    }, [blockIndex]);

    const handleNextInBlock = () => {
        setBlockIndex(blockIndex + 1)
    }

    return !!loader ? (
        <>
            <Background index={"2"} />
            <Loader />
        </>
    ) : (
        <>
            <Background index={"2"} />
            <View style={css.container}>
                <Text style={css.title}>Informação Pessoais</Text>
                <View style={css.content}>
                    <Text style={css.content.text}>{blockData[keys[blockIndex]].question}</Text>
                    
                    
                    <TextInput
                        style={css.content.input}
                    />
                
                
                </View>
                {
                    blockIndex + 1 < keys.length ? (
                        <View style={css.btn}>
                            <NextBlock action={handleNextInBlock} text={"Proximo"} />
                        </View>
                    ) : (
                        <View style={css.btn}>
                            <NextBlock action={next} text={"Salvar"} />
                        </View>
                    )
                }
            </View>
        </>
    )
}

export default Introduction;