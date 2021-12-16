import React, { useState, useContext, useEffect } from 'react'
import { View, Text, StyleSheet, Keyboard } from 'react-native'
import { TextInput, Button, ActivityIndicator } from 'react-native-paper'

import { AccountBackgroundImage } from '../components/account.styles'
import { AccountBackgroundCover } from '../components/account.styles'
import { theme } from '../../../infrastructure/theme'
import { AuthenticationContext } from '../../../services/authentication/authentication.context'
import AppText from '../../../components/AppText'

export default function RegisterScreen() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatedPassword, setRepeatedPassword] = useState('')
    const { error, onRegister, isLoading } = useContext(AuthenticationContext)

    return (
        <AccountBackgroundImage>
            <AccountBackgroundCover />
            <AppText style={styles.header} fontFamily={theme.fonts.monospace} fontSize={theme.fontSizes.h5}>Meals To Go</AppText>
            <View style={styles.loginContainer}>
                <TextInput style={styles.textInput} label="E-mail" textContentType={'emailAddress'} keyboardType={'email-address'} autoCapitalize={'none'} onChangeText={text => setEmail(text)} />
                <TextInput secureTextEntry textContentType={'password'} autoCapitalize={'none'} style={[styles.textInput, { marginTop: theme.space[3] }]} label="Password" onChangeText={text => setPassword(text)} />
                <TextInput secureTextEntry textContentType={'password'} autoCapitalize={'none'} style={[styles.textInput, { marginTop: theme.space[3] }]} label="Repeat Password" onChangeText={text => setRepeatedPassword(text)} />
                {error && <AppText style={styles.error} fontSize={theme.fontSizes.caption} fontFamily={theme.fonts.monospace} color={theme.colors.text.error}>{error}</AppText>}
                {!isLoading ? (<Button style={styles.loginButton} icon="email" mode="contained" color={theme.colors.brand.primary} onPress={() => { Keyboard.dismiss(); onRegister(email, password, repeatedPassword) }} > REGISTER </Button>) : (<ActivityIndicator style={styles.activityIndicator} animating={true} size={theme.sizes[11]} color={theme.colors.brand.primary} />)}
            </View>



        </AccountBackgroundImage>
    )
}

const styles = StyleSheet.create({
    loginContainer: {
        width: '80%',
        padding: theme.space[5],
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: theme.space[1],
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
    },
    loginButton: {
        width: '100%',
        marginTop: theme.space[3],
        padding: theme.space[1],
    },
    textInput: {
        width: '100%',
    },
    snackBar: {
        backgroundColor: theme.colors.brand.primary,
    },
    activityIndicator: {
        margin: theme.space[5],
    },
    error: {
        width: '100%', marginTop: theme.space[2]
    },
    header: {
        marginBottom: theme.space[2],
    }
})
