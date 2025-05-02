import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function FancyCard() {
    console.log("React-native-alphone ");

    return (
        <View>
            <Text style={styles.headdingText}>Trending Places</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image
                    style={styles.cardImage}
                    source={{
                        uri: 'https://theheritageart.com/wp-content/uploads/2022/11/hawa-mahal.jpg'
                    }}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Hawa mahal</Text>
                    <Text style={styles.cardLabel}>Visit Pink City jaipur</Text>
                    <Text style={styles.cardDesciption}>The Hawa mahal is the one the most iconic place in jaipur, rajsthan not only in rajasthan but i love to say it famous and most visited one of place in india</Text>
                    <Text style={styles.cradFooter}>15 min away</Text>
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
    card: {
        // width: 360,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
    },
    cardElevated: {
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        }
    },
    cardImage: {
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12,
    },
    cardTitle: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 6
    },
    cardLabel: {
        fontSize: 14,
        marginBottom: 6
    },
    cardDesciption: {
        fontSize: 12,
        marginBottom: 12,
        flexShrink: 1,
        marginTop: 6,
        color: "#242B2E"
    },
    cradFooter: {

    },
});
