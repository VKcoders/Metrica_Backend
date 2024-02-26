import React, { useState, useEffect, useContext } from "react";
import { Global } from "../../Context";
import Block from "../../Components/Blocks";

import { getAllSearchs } from "../../Service/Search";

function Search({navigation: {navigate}}) {
    const { token } = useContext(Global);
    const [index, setIndex] = useState(0);
    // const [pipeline, setPipeline] = useState([]);
    const [temporarial, setTemporarial] = useState({});

    const pipeline = ["Warning", "Introduction", "Political"];

    useEffect(() => {
        async function Job() {
            const searchData = await getAllSearchs(token);

            const objetoFiltrado = { ...searchData }; // Copiar o objeto para evitar modificar o original
            for (const key in objetoFiltrado) {
                if (objetoFiltrado[key].q01 === "" || objetoFiltrado.client_id) {
                    delete objetoFiltrado[key]; // Excluir a seção se q01 estiver vazio
                }
            }
            
            // console.log(objetoFiltrado[`section_0${1}`]);
            setTemporarial(objetoFiltrado)
        }
        Job()
    }, [])

    const handleNext = () => setIndex(index + 1);

    const DynamicComponent = Block[pipeline[index]];

    return <DynamicComponent nav={navigate} next={handleNext} data={temporarial}/>;
}

export default Search;