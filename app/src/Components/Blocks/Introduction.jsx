import { useEffect, useState } from "react";
import { Text, View, KeyboardAvoidingView } from "react-native";

import { screens as styles } from "../../Style";
import Background from "../../Components/Background";
import Loader from "../../Components/Loader";

import AnswerType from "./AnswerType";

import { getSearchIntro } from "../../Service/Search";

function Introduction({ next, introId, token }) {
    const [updataRender, setUpdataRender] = useState(false);
    const [blockData, setBlockData] = useState({});
    const [blockAnswer, setBlockAnswer] = useState([]);
    const [currentAnswer, setCurrentAnswer] = useState('');

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

    const handleNextInBlock = () => {
        setUpdataRender(!updataRender);

        const toSaveOnBlock = {
            id: blockIndex + 1,
            text: currentAnswer
        };

        setBlockAnswer(prev => ([...prev, toSaveOnBlock]));

        if (blockIndex + 1 >= keys.length) {
            next();
            return;
        }

        setBlockIndex(blockIndex + 1);
    }


    return !!loader ? (
        <>
            <Background index={"2"} />
            <Loader />
        </>
    ) : (
        <>
            <Background index={"2"} />
            <KeyboardAvoidingView style={css.container} behavior="height">
                <Text style={css.title}>Informação Pessoais</Text>
                    <View style={css.content}>
                        <Text style={css.content.text}>{blockData[keys[blockIndex]].question}</Text>
                        <AnswerType
                            next={{
                                func: handleNextInBlock,
                                text: (blockIndex + 1 < keys.length) ? "Próximo" : "Salvar"
                            }}
                            saveAnswer={setCurrentAnswer}
                            type={blockData[keys[blockIndex]].type}
                            questionInfo={{ counter: blockIndex, ...blockData[keys[blockIndex]]}}
                        />
                    </View>
            </KeyboardAvoidingView>
        </>
    )
}

export default Introduction;