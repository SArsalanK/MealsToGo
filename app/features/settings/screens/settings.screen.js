import React, { useContext, useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, StatusBar, TouchableOpacity } from 'react-native'
import { Button, List, Avatar } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import { AuthenticationContext } from '../../../services/authentication/authentication.context'
import AppText from '../../../components/AppText'
import { theme } from '../../../infrastructure/theme'
import { AccountBackgroundCover } from '../../accounts/components/account.styles';
import { AccountBackgroundImage } from '../../accounts/components/account.styles';

export default function SettingsScreen({ navigation }) {
    const { onLogout, user } = useContext(AuthenticationContext)
    const [photo, setPhoto] = useState(null)

    const getProfilePicture = async () => {
        const photoUri = await AsyncStorage.getItem(`${user.uid}-photo`)
        setPhoto(photoUri)
    }

    useFocusEffect(() => {
        getProfilePicture()
    }, [user])

    return (
        <AccountBackgroundImage>
            <AccountBackgroundCover />
            <SafeAreaView style={styles.container}>
                <View style={styles.avatarContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('CameraScreen')} >
                        {!photo && < Avatar.Icon size={180} icon="human" backgroundColor={theme.colors.brand.primary} />}
                        {photo && < Avatar.Image size={180} source={{ uri: photo }} backgroundColor={theme.colors.brand.primary} />}
                    </TouchableOpacity>
                    <AppText style={styles.emailText}>{user.email}</AppText>
                </View>
                <List.Section style={{ marginTop: theme.space[6] }}>
                    <List.Item style={styles.listItem} titleStyle={styles.listItemTitle} descriptionStyle={styles.listItemDescription} title={'Favourites'} description={'View your favourites'} left={(props) => <List.Icon {...props} color={theme.colors.ui.error} icon={'heart'} />} onPress={() => navigation.navigate('FavouritesScreen')} />
                    <List.Item style={[styles.listItem, { marginTop: theme.space[2] }]} titleStyle={styles.listItemTitle} title={'Logout'} left={(props) => <List.Icon {...props} color={theme.colors.brand.primary} icon={'door'} />} onPress={() => onLogout()} />
                </List.Section>
            </SafeAreaView >
        </AccountBackgroundImage >
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: theme.space[1],
        backgroundColor: 'transparent',
        paddingTop: StatusBar.currentHeight
    },
    item: {
        padding: theme.space[4],
    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: theme.space[4]
    },
    emailText: {
        marginTop: theme.space[2]
    },
    listItem: {
        backgroundColor: 'rgba(255, 255, 255, 0.4)'
    },
    listItemTitle: {
        fontFamily: theme.fonts.heading,
    },
    listItemDescription: {
        fontFamily: theme.fonts.monospace
    }
})
