import React from 'react'
import { View, Text, StyleSheet, Image, Platform } from 'react-native'
import { theme } from '../infrastructure/theme'
import { WebView } from 'react-native-webview';

import AppText from './AppText'

export default function CompactRestaurantInfoComponent({ restaurant, isMap }) {

    const isAndroid = Platform.OS === 'android'

    return (
        <View style={styles.item}>
            {isAndroid && isMap ? <WebView style={styles.compactImage} source={{ uri: restaurant.photos[0] }} /> : <Image style={styles.compactImage} source={{ uri: restaurant.photos[0] }} />}
            <AppText style={styles.text} fontFamily={theme.fonts.heading} fontSize={theme.fontSizes.caption}>{restaurant.name}</AppText>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: theme.space[2],
        maxWidth: 120,
        alignItems: 'center',
    },
    text: {
        top: theme.space[1],
    },
    compactImage: {
        borderRadius: theme.space[2],
        width: 120,
        height: 100,
    }
})
