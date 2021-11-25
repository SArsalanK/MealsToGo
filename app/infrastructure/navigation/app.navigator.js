import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { theme } from '../theme';
import ResturantScreen from '../../features/resturants/screens/resturants.screen';
import AppText from '../../components/AppText';
import { RestaurantStackNavigator } from './restaurants.navigator';
import MapScreen from '../../features/map/components/screens/screen.map';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
    Restaurants: 'md-restaurant',
    Map: 'md-map',
    Settings: 'md-settings'
}

const SettingsScreen = () => {
    return (<AppText>Settings Screen</AppText>)
}

const TabBarIcon = (route) => ({ focused, color, size }) => {
    const iconName = TAB_ICON[route.name];
    return <Ionicons name={iconName} size={size} color={color} />;
}

const screenOptions = ({ route }) => {
    return ({
        tabBarStyle: { height: theme.space[15] },
        tabBarItemStyle: { padding: theme.space[2] },
        tabBarIcon: TabBarIcon(route),
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarLabelStyle: { fontFamily: theme.fonts.heading }
    })
}

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={screenOptions}>
                <Tab.Screen name="Restaurants" component={RestaurantStackNavigator} />
                <Tab.Screen name="Map" component={MapScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
