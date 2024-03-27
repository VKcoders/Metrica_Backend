import { useState } from "react";
import { StyleSheet, Dimensions, View, Text, TouchableOpacity } from "react-native";

import { strings } from "../Localized";

const { height, width } = Dimensions.get("screen");

function ToggleMenu({currentLocation}) {
    const [open, setOpen] = useState(false);
    const localized = strings.Component.ToggleMenu;

    const handlePress = () => {
        setOpen(!open);
    }

    return !open ? (
        <TouchableOpacity style={styles.toggleContainer} onPress={handlePress}>
            <View style={styles.bar} />
            <View style={styles.bar} />
            <View style={styles.bar} />
        </TouchableOpacity>
    ) : (
        <>
            <TouchableOpacity style={styles.mask} onPress={handlePress}/>
            <View style={styles.menuContent}>
                {
                    localized.map((name, i) => {
                        const current = currentLocation === name[1];

                        return (
                            <TouchableOpacity key={"menu-" + i} style={styles.menuItem}>
                                <Text style={[styles.menuItem.text, !!current && {color: "#E5E4E2"}]}>{name[0]}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    toggleContainer: {
        position: "absolute",
        zIndex: 10,
        top: 15,
        left: 15,
        width: 50,
    },
    bar: {
        backgroundColor: "black",
        width: "100%",
        height: 6,
        margin: 3
    },
    mask: {
        backgroundColor: "rgba(0, 0, 0, 0.35)",
        position: "absolute",
        zIndex: 10,
        height,
        width
    },
    menuContent: {
        backgroundColor: "#708090",
        position: "absolute",
        zIndex: 11,
        height,
        width: width * 0.40
    },
    menuItem: {
        text: {
            fontWeight: "600",
            fontSize: 16,
            color: "black",
        },
        padding: 8,
        margin: 10
    }
})

export default ToggleMenu;