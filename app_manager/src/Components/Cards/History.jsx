import { StyleSheet, Text, TouchableOpacity } from "react-native";

function CardSearch({data, token}) {
    const {id, introduction: qtdIntro, search: qtdQuestion, qtd_users, total} = data;

    return (
        <TouchableOpacity style={styles.container}>
            <Text>Identificador: {id}</Text>
            <Text>Número de perguntas: {qtdIntro + qtdQuestion}</Text>
            <Text>Entrevistadores: {qtd_users} pessoas</Text>
            <Text style={{position: "absolute", right: 10, top: 10}}>{total}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FAF9F6",
        marginTop: 15,
        marginBottom: 5,
        padding: 15,
        borderRadius: 10
    }

})

export default CardSearch;