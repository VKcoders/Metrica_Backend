import "../../Styles/Components/ClientCard.css";

function Client({ data }) {
    const {name, user, password} = data;
    // console.log(data)
    return (
        <div className="client-card-container">
            <p id="client-card-info">{name}</p>
            <p id="client-card-info">{user}</p>
            <p id="client-card-info">{password}</p>
        </div>
    )
}

export default Client;