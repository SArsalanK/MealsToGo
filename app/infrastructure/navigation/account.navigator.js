import React from 'react'
import { View, Text } from 'react-native'

import AccountScreen from '../../features/accounts/screens/accounts.screen'
import LoginScreen from '../../features/accounts/screens/login.screen'
import RegisterScreen from '../../features/accounts/screens/register.screen'

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function AccountNavigator() {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name='AccountScreen' component={AccountScreen}></Stack.Screen>
            <Stack.Screen name='LoginScreen' component={LoginScreen}></Stack.Screen>
            <Stack.Screen name='RegisterScreen' component={RegisterScreen}></Stack.Screen>
        </Stack.Navigator >
    )

}
