import React, { useState } from "react";
import Block from "../../Components/Blocks";

function Search({navigation: {navigate}}) {
    const [index, setIndex] = useState(0);
    const pipeline = ["Warning", "Introduction"];

    const handleNext = () => setIndex(index + 1);

    const DynamicComponent = Block[pipeline[index]];

    return <DynamicComponent nav={navigate} next={handleNext} />;
}

export default Search;
