import { useEffect, useState } from "react";

import { Text, View, KeyboardAvoidingView } from "react-native";

import { screens as styles } from "../../Style";
import Background from "../Background";
import Loader from "../../Components/Loader";

import AnswerType from "./AnswerType";

import { getSearchMain } from "../../Service/Search";

function Questions({ next, questionId, token }) {
    const [blockData, setBlockData] = useState({});
    const [blockAnswer, setBlockAnswer] = useState([]);
    const [currentAnswer, setCurrentAnswer] = useState('');

    const [keys, setKeys] = useState([]);
    const [blockIndex, setBlockIndex] = useState(0);
    const [loader, setLoader] = useState(true);

    const css = styles["Question"];

    useEffect(() => {
        async function Jobs() {
            const data = await getSearchMain(questionId, token);
            const paramkeys = Object.keys(data).slice(1)
            setKeys(paramkeys);
            setBlockData(data);
            setLoader(false);
        };
        Jobs();
    }, []);

    const handleNextInBlock = () => {
        const toSaveOnBlock = {
            id: blockIndex + 1,
            text: currentAnswer
        };

        setBlockAnswer(prev => ([...prev, toSaveOnBlock]));

        if (blockIndex + 1 >= keys.length) {
            // console.log(blockAnswer)
            next();
            return;
        }

        setBlockIndex(blockIndex + 1);
    }

    return !!loader ? (
        <>
            <Background index={"1"} />
            <Loader />
        </>
    ) : (
        <>
            <Background index={"1"} />
            <KeyboardAvoidingView style={css.container} behavior="height">
                <Text style={css.title}>{`Pergunta - ${blockIndex + 1}/${keys.length}`}</Text>
                    <View style={css.content}>
                        <Text style={css.content.text}>{blockData[keys[blockIndex]].question}</Text>
                        <AnswerType
                            next={{
                                func: handleNextInBlock,
                                text: (blockIndex + 1 < keys.length) ? "Próximo" : "Salvar"
                            }}
                            saveAnswer={setCurrentAnswer}
                            type={blockData[keys[blockIndex]].type}
                            questionInfo={blockData[keys[blockIndex]]}
                        />
                    </View>
            </KeyboardAvoidingView>
        </>
    )
}

export default Questions;