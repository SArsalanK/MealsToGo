import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button, ActivityIndicator } from 'react-native-paper';
import LottieView from 'lottie-react-native';

import { AccountBackgroundImage, AccountBackgroundCover } from '../components/account.styles'
import { theme } from '../../../infrastructure/theme'
import AppText from '../../../components/AppText';

import { AuthenticationContext } from '../../../services/authentication/authentication.context';

export default function AccountScreen({ navigation }) {

    const { isLoading } = useContext(AuthenticationContext)
    console.log('isLoading', isLoading)

    return (
        <AccountBackgroundImage>
            <AccountBackgroundCover />
            <View style={styles.lottieView}>
                <LottieView resizeMode={'cover'} key={'animation'} autoPlay loop source={require('../../../assets/watermelon.json')} />
            </View>
            <AppText style={styles.header} fontFamily={theme.fonts.monospace} fontSize={theme.fontSizes.h5}>Meals To Go</AppText>
            {isLoading ?
                (<ActivityIndicator animating={true} size={theme.sizes[11]} color={theme.colors.brand.primary} />) :
                (<View style={styles.accountContainer}>
                    <Button style={styles.loginButton} icon="lock-open-outline" mode="contained" color={theme.colors.brand.primary} onPress={() => navigation.navigate('LoginScreen')} > LOGIN </Button>
                    <Button style={styles.registerButton} icon="email" mode="contained" color={theme.colors.brand.primary} onPress={() => navigation.navigate('RegisterScreen')} > REGISTER </Button>
                </View>)}
        </AccountBackgroundImage>
    )
}

const styles = StyleSheet.create({
    accountContainer: {
        width: '50%',
        padding: theme.space[5],
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: theme.space[2],
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
    },
    loginButton: {
        width: '100%',
        padding: theme.space[1],
    },
    registerButton: {
        width: '100%',
        padding: theme.space[1],
        marginTop: theme.space[4],
    },
    header: {
        marginBottom: theme.space[2],
    },
    lottieView: {
        width: '100%',
        height: '40%',
        position: 'absolute',
        top: theme.space[7],
        padding: theme.space[3],
    },
})
