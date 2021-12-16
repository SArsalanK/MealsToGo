import React from 'react'
import { View, Text } from 'react-native'
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack';

import SettingsScreen from '../../features/settings/screens/settings.screen';
import FavouritesScreen from '../../features/settings/screens/favourites.screen'
import CameraScreen from '../../features/settings/screens/camera.screen'
import { theme } from '../theme';

const SettingsStack = createStackNavigator();

export default function SettingsNavigator() {
    return (
        <SettingsStack.Navigator screenOptions={{
            gestureEnabled: true, ...TransitionPresets.ModalPresentationIOS
        }}>
            <SettingsStack.Screen options={{ headerShown: false }} name={"SettingsScreen"} component={SettingsScreen}></SettingsStack.Screen>
            <SettingsStack.Screen options={{ headerShown: true, headerTitle: 'Favourites', headerTitleStyle: { fontFamily: theme.fonts.heading } }} name={"FavouritesScreen"} component={FavouritesScreen}></SettingsStack.Screen>
            <SettingsStack.Screen options={{ headerShown: false }} name={"CameraScreen"} component={CameraScreen}></SettingsStack.Screen>
        </SettingsStack.Navigator>
    )
}
