import { useEffect, useContext, useState } from "react";
import { Global } from "../../Context";
import { SafeAreaView, ScrollView, Text, TouchableOpacity, Image } from "react-native";

import { screens as styles } from "../../Style";
import { strings, icons } from "../../Localized";
import { RemainderCard, NoRemainderCard } from "../../Components/Remainder";
import { Remainder as Modal } from "../../Modal"

import { getAllUserNotes } from "../../Service/Notes";

function Remainder({ route: { name } }) {
    const { token, user } = useContext(Global);
    const [notes, setNotes] = useState([]);
    const [update, setUpdate] = useState(false);
    const [modal, setModal] = useState(false);
    const localized = strings[name];
    const css = styles[name];

    useEffect(() => {
        async function Jobs() {
            const data = await getAllUserNotes(user.id, token);
            setNotes(data);
        }
        Jobs();
    }, [update]);

    const handlePress = () => setModal(true);

    return notes.length <= 0 ? (
        <SafeAreaView style={[css.note, css.noNotes]}>
            <Modal show={modal} token={token} userId={user.id} action={setModal} refresh={setUpdate} />
            <TouchableOpacity onPress={handlePress} style={css.newNote}>
                <Text style={css.newNote.text}>{localized.new}</Text>
                <Image source={icons.add} style={css.newNote.icon} />
            </TouchableOpacity>
        </SafeAreaView>
    ) : (
        <ScrollView style={css.note}>
            <Modal show={modal} token={token} userId={user.id} action={setModal} refresh={setUpdate} />
            {
                notes.map((note, i) => <RemainderCard key={"note-" + i} refresh={setUpdate} token={token} note={note} />)
            }
            <TouchableOpacity style={css.add} onPress={handlePress}>
                <Image source={icons.add} style={css.add.icon} />
            </TouchableOpacity>
        </ScrollView>
    )
}

export default Remainder;