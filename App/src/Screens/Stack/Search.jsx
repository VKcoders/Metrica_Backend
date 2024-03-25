import React, { useState, useEffect, useContext } from "react";
import { Global } from "../../Context";
import Block from "../../Components/Blocks";

import Loader from "../../Components/Loader"

import { getSearchById } from "../../Service/Search";

function Search({navigation: { navigate }, route: {params}}) {
    const { token, user: {id} } = useContext(Global);
    const [searchInfo, setSearchInfo] = useState({});
    const [index, setIndex] = useState(0);
    const [loader, setLoader] = useState(true);
    const pipeline = ["Warning", "Introduction", "Questions"];

    useEffect(() => {
        async function Jobs() {
            const data = await getSearchById(params.searchId, token);
            setSearchInfo(data);
            setLoader(false)
        };
        Jobs()
    }, [])

    const handleNext = () => {
        if (pipeline.length === index + 1) {
            setIndex(0);
            navigate("Home");
            return;
        }
        setIndex(index + 1);
    }

    const DynamicComponent = Block[pipeline[index]];

    return !!loader ? (
        <Loader />
    ) : (
        <DynamicComponent 
            next={handleNext} 
            introId={searchInfo.introduction} 
            questionId={searchInfo.search}
            token={token}
            userId={id}
            searchId={params.searchId}
        />
    ) 
};

export default Search;