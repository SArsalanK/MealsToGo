import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Button } from 'react-native-paper'

import { theme } from '../theme';
import { RestaurantStackNavigator } from './restaurants.navigator';
import MapScreen from '../../features/map/screens/screen.map';
import { RestaurantsContextProvider } from '../../services/restaurants/restaurants.context'
import { LocationContextProvider } from '../../services/location/location.context';
import { FavouritesContextProvider } from '../../services/favourites/favourites.context';
import SettingsScreen from '../../features/settings/screens/settings.screen'
import SettingsNavigator from './settings.navigator';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
    Restaurants: 'md-restaurant',
    Map: 'md-map',
    Settings: 'md-settings'
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
        <FavouritesContextProvider>
            <LocationContextProvider>
                <RestaurantsContextProvider>

                    <Tab.Navigator
                        screenOptions={screenOptions}>
                        <Tab.Screen name="Restaurants" component={RestaurantStackNavigator} />
                        <Tab.Screen name="Map" component={MapScreen} />
                        <Tab.Screen name="Settings" component={SettingsNavigator} />
                    </Tab.Navigator>

                </RestaurantsContextProvider>
            </LocationContextProvider>
        </FavouritesContextProvider>
    )
}
