import { useEffect, useState, useContext } from "react";
import { Global } from "../Context";
import { SafeAreaView, View, Text, ScrollView } from "react-native";

function SearchStatus({route: { name, params }, navigation: { navigate }}) {
    return (
        <SafeAreaView>
            <Text>{params.searchId}</Text>
        </SafeAreaView>
    )
}

export default SearchStatus;