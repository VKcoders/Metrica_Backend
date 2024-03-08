import React, { useState, useEffect, useContext } from "react";
import { Global } from "../../Context";
import Block from "../../Components/Blocks";

// import { getAllSearchs } from "../../Service/Search";

function Search({navigation: { navigate }}) {
    const { token } = useContext(Global);
    const [index, setIndex] = useState(0);

    const pipeline = ["Warning", "Introduction", "Questions"];

    const handleNext = () => {
        if (pipeline.length === index + 1) {
            setIndex(0);
            navigate("Home");
            return;
        }
        setIndex(index + 1);
    }

    const DynamicComponent = Block[pipeline[index]];

    return <DynamicComponent next={handleNext} token={token} />;
}

export default Search;