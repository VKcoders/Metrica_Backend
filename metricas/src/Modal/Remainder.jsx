import { useState } from 'react';

import { Modal, Text, View, TouchableOpacity } from 'react-native';
import { screens as styles } from "../Style";
import { strings } from '../Localized';
import { TextInput } from 'react-native-gesture-handler';

import { createNote } from "../Service/Notes";

function Remainder({show, action, refresh, userId, token}) {
    const [note, setNote] = useState('')
    const localized = strings.Modal["RemainderModal"];
    const css = styles["RemainderModal"];

    const createRemainder = async () => {
        await createNote(note, userId, token);
        refresh(p => !p);
        action(!show);
    }

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={show}
        >
            <View style={css.modal}>
                <View style={css.container}>
                    <TextInput
                        value={note}
                        onChangeText={setNote}
                        style={css.input}
                    />
                    <TouchableOpacity style={css.btn} onPress={createRemainder}>
                        <Text style={css.btn.text}>{localized}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default Remainder;