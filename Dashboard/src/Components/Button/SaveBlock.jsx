import "../../Styles/Button/SaveBlock.css";

function SaveBock({data}) {
    
    const handleClick = () => {
        console.log(data)
    }
    return (
        <div className="save-block-container" onClick={handleClick}>
            <p id="save-block-text">Salvar Bloco</p>
        </div>
    )
}

export default SaveBock;