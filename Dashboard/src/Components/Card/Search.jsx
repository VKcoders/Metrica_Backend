import { useEffect } from "react";
import "../../Styles/Components/SearchCard.css"

function Search({ data }) {
    const { client_id, id, introduction, qtd_users, search, total, users_meta } = data;

    useEffect(() => {
        async function Jobs() {
            
        };
        Jobs();
    }, []);

    return (
        <div className="search-card-container">
            <p>cliente: {client_id}</p>
            <hr />
            <p>Total de Perguntas: {total}</p>
            <hr />
            <p>{qtd_users} entrevistadores com meta de {users_meta} perguntas</p>
        </div>
    )
}

export default Search;