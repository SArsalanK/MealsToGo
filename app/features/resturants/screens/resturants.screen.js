import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity, StatusBar } from 'react-native'

import ResturantInfoCard from '../components/resturant-info-card-component';
import { ActivityIndicator, Colors } from 'react-native-paper';

import { theme } from '../../../infrastructure/theme';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import { SearchContaier } from '../components/search.component';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function ResturantScreen({ navigation }) {

    const { restaurants, isLoading, error } = useContext(RestaurantsContext)

    return (
        <SafeAreaView style={styles.container}>
            {isLoading && <ActivityIndicator size={50} style={styles.appActivityIndicatorOverlay} />}
            <SearchContaier />
            <FlatList
                data={restaurants}
                renderItem={({ item }) => { return (<TouchableOpacity onPress={() => navigation.navigate('RestaurantDetail', { restaurant: item })}><ResturantInfoCard restaurant={item} /></TouchableOpacity>) }}
                keyExtractor={(item) => item.name}
                contentContainerStyle={{ marginBottom: theme.space[2] }}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        padding: theme.space[1],
        backgroundColor: theme.colors.bg.primary
    },
    appActivityIndicatorOverlay: {
        height: '100%',
        width: '100%',
        opacity: 0.8,
        position: 'absolute',
        color: Colors.blue300,
    },
});
