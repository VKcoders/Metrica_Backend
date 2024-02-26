import { useEffect, useContext, useState } from "react";
import { Global } from "../../Context";
import { SafeAreaView, ScrollView, Text, TouchableOpacity, Image } from "react-native";

import { screens as styles } from "../../Style";
import { strings, icons } from "../../Localized";
import { RemainderCard, NoRemainderCard } from "../../Components/Remainder";

import { getAllUserNotes } from "../../Service/Notes";

function Remainder({route: { name }, navigation: { navigate }}) {
    const { token, user } = useContext(Global);
    const [notes, setNotes] = useState([]);
    const localized = strings[name];
    const css = styles[name];

    useEffect(() => {
        async function Jobs() {
            const data = await getAllUserNotes(user.id, token)
            setNotes(data);
        }
        Jobs();
    }, [])

    return notes.length <= 0 ? (
        <SafeAreaView style={[css.note, css.noNotes]}>
            <TouchableOpacity style={css.newNote}>
                <Text style={css.newNote.text}>{localized.new}</Text>
                <Image source={icons.add} style={css.newNote.icon} />
            </TouchableOpacity>
        </SafeAreaView>
    ) : (
        <ScrollView style={css.note}>
            {
                notes.map((note, i) => <RemainderCard key={"note-" + i} note={note} />)
            }
            <TouchableOpacity style={css.add}>
                <Image source={icons.add} style={css.add.icon} />
            </TouchableOpacity>
        </ScrollView>
    )
}

export default Remainder;