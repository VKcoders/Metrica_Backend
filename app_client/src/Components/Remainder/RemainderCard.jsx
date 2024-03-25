import { useState, useRef, useEffect } from "react";
import { TouchableOpacity, Text, TextInput, Alert } from "react-native";

import { screens as styles } from "../../Style";
import { strings } from "../../Localized";

import { editNote, deleteNote } from "../../Service/Notes"

function RemainderCard({note: {note, id, updated}, token, refresh}) {
    const [edit, setEdit] = useState(false);
    const inputRef = useRef(null);
    const [newNote, setNewNote] = useState(note);
    const css = styles["RemainderCard"];
    const localized = strings.Alerts["RemainderCard"];

    useEffect(() => {
        if (edit) {
            inputRef.current.focus();
        }
    }, [edit]);

    const handleDelete = () => {
        Alert.alert(localized[0], localized[1],
            [{ text: localized[2], style: "cancel" },
                {
                    text: localized[3],
                    onPress: async () => {
                        await deleteNote(id, token)
                        refresh(p => !p)
                    },
                },
            ],
            { cancelable: false }
        );
    }

    const handleBlur = async () => {
        if (note === newNote) {
            setEdit(false);
            return
        };

        await editNote(newNote, id, token);
        setEdit(false);
        refresh(p => !p)
    };


    return (
        <TouchableOpacity style={css.container} onPress={() => setEdit(true)} onLongPress={handleDelete} >
            {
                !edit ? (
                    <Text style={css.text}>{note}</Text>
                ) : (
                    <TextInput
                        value={newNote}
                        style={css.input}
                        ref={inputRef}
                        autoFocus={true}
                        onChangeText={setNewNote}
                        onBlur={handleBlur}
                    />
                )
            }
            <Text style={css.date}>{updated}</Text>
        </TouchableOpacity>
    )
}


export default RemainderCard;