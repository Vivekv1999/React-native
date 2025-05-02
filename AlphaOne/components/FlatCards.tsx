import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function FlatCards() {
    return (
        <View>
            <Text style={styles.headdingText}>Flat Cards</Text>
            <View style={styles.container}>
                <View style={[styles.card, styles.cardOne]}>
                    <Text>Red</Text>
                </View>
                <View style={[styles.card, styles.cardOTwo]}>
                    <Text>Blue</Text>
                </View>
                <View style={[styles.card, styles.cardThree]}>
                    <Text>Green</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headdingText: {
        fontSize: 24,
        fontWeight: "bold",
        paddingHorizontal: 8
    },
    container: {
        flex: 1,
        flexDirection: "row"
    },
    card: {
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 8,
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    cardOne: {
        backgroundColor: "#EF5354"
    }, cardOTwo: {
        backgroundColor: "blue"
    }, cardThree: {
        backgroundColor: "green"
    },
});
