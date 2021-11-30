import React from 'react'
import { View, StyleSheet, ImageBackground } from 'react-native'
import { theme } from '../../../infrastructure/theme'

export const AccountBackgroundImage = ({ children }) => {
    return (
        <ImageBackground style={styles.imageBackground} source={require('../../../assets/home_bg.jpg')}>
            {children}
        </ImageBackground>
    )
}

export const AccountBackgroundCover = () => {
    return (
        <View style={styles.view}></View>
    )
}

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    view: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
    }
})