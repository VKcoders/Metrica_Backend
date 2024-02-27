import { useEffect, useContext, useState } from "react";
import { Global } from "../../Context";
import { SafeAreaView, ScrollView, Text, TouchableOpacity, Image } from "react-native";

import { screens as styles } from "../../Style";
import Loader from "../../Components/Loader";
import { strings, icons } from "../../Localized";
import { RemainderCard } from "../../Components/Remainder";
import { Remainder as Modal } from "../../Modal"

import { getAllUserNotes } from "../../Service/Notes";

function Remainder({ route: { name } }) {
    const { token, user } = useContext(Global);
    const [loader, setLoader] = useState(true);
    const [notes, setNotes] = useState([]);
    const [update, setUpdate] = useState(false);
    const [modal, setModal] = useState(false);
    const localized = strings[name];
    const css = styles[name];

    useEffect(() => {
        async function Jobs() {
            const data = await getAllUserNotes(user.id, token);
            setNotes(data);

            setTimeout(() => {
                setLoader(false);
            }, 500);
        }
        Jobs();
    }, [update]);

    const handlePress = () => setModal(true);

    return !loader ? (
        notes.length <= 0 ? (
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
    ) : (
        <SafeAreaView style={{flex: 1, backgroundColor: "#F3E5AB"}}>
            <Loader />
        </SafeAreaView>
    )
    
    //     notes.length <= 0 ? (
    // ) : (
    // )
}

export default Remainder;