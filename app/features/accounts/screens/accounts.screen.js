import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper';

import { AccountBackgroundImage, AccountBackgroundCover } from '../components/account.styles'
import { theme } from '../../../infrastructure/theme'

export default function AccountScreen({ navigation }) {
    return (
        <AccountBackgroundImage >
            <AccountBackgroundCover />
            <View style={styles.accountContainer}>
                <Button style={styles.loginButton} icon="lock-open-outline" mode="contained" color={theme.colors.brand.primary} onPress={() => navigation.navigate('LoginScreen')} > LOGIN </Button>
                <Button style={styles.registerButton} icon="lock-open-outline" mode="contained" color={theme.colors.brand.primary} onPress={() => navigation.navigate('RegisterScreen')} > REGISTER </Button>
            </View>
        </AccountBackgroundImage>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    accountContainer: {
        width: '50%',
        padding: theme.space[5],
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: theme.space[1],
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
    loginButton: {
        width: '100%',
        padding: theme.space[1],
    },
    registerButton: {
        width: '100%',
        padding: theme.space[1],
        marginTop: theme.space[4],
    }
})
