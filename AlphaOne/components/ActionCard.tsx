import React from "react";
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ActionCard() {
    function openWebSite(webSiteLink: string) {
        Linking.openURL(webSiteLink)
    }
    return (
        <View>
            <Text style={styles.headdingText}>Blog Card</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>

                    <Text style={styles.headerText}>
                        What's new in Javascript in 21- Es212
                    </Text>
                </View>
                <Image
                    source={{
                        uri: "https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg"
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={3}>
                        Just like evry year on this year javascript release a new verison of it and it mind blowing you can not belive this is very charming on top of the post.
                        i thing you must learn javascript for it, it will below you mind alos just like mine
                    </Text>
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity
                        onPress={() => openWebSite("https://developer.mozilla.org/en-US/docs/Web/JavaScript")}>
                        <Text style={styles.socialLink}>Read More</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => openWebSite("https://developer.mozilla.org/en-US/docs/Web/JavaScript")}>
                        <Text style={styles.socialLink}>Read More</Text>
                    </TouchableOpacity>

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

    },
    elevatedCard: {

    },
    headingContainer: {

    },
    headerText: {

    },
    cardImage: {
        height: 160
    },
    bodyContainer: {

    },
    footerContainer: {

    },
    socialLink: {

    }
});
