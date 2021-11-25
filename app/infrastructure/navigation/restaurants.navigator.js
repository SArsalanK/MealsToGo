import React from 'react'
import { View, Text } from 'react-native'
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack';
import ResturantScreen from '../../features/resturants/screens/resturants.screen';

import RestaurantDetailScreen from '../../features/resturants/screens/restaurant-detail.screen';

const RestaurantStack = createStackNavigator();

export const RestaurantStackNavigator = () => {
    return (
        <RestaurantStack.Navigator screenOptions={{ headerShown: false, gestureEnabled: true, ...TransitionPresets.ModalPresentationIOS }}>
            <RestaurantStack.Screen name={"Resturants"} component={ResturantScreen}></RestaurantStack.Screen>
            <RestaurantStack.Screen name={"RestaurantDetail"} component={RestaurantDetailScreen}></RestaurantStack.Screen>
        </RestaurantStack.Navigator>
    )

}