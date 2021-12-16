import React, { useContext } from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'

import { FavouritesContext } from '../../../services/favourites/favourites.context'
import ResturantInfoCard from '../../resturants/components/resturant-info-card-component'
import { theme } from '../../../infrastructure/theme'
import AppText from '../../../components/AppText'

export default function FavouritesScreen({ navigation }) {

    const { favourites } = useContext(FavouritesContext)

    return (
        favourites.length ?
            <View style={styles.container}>
                <FlatList
                    data={favourites}
                    renderItem={({ item }) => { return (<TouchableOpacity onPress={() => navigation.navigate('RestaurantDetail', { restaurant: item })}><ResturantInfoCard restaurant={item} /></TouchableOpacity>) }}
                    keyExtractor={(item) => item.name}
                    contentContainerStyle={{ marginBottom: theme.space[2] }}
                />
            </View>
            :
            <View style={[styles.container, {
                justifyContent: 'center',
                alignItems: 'center'
            }]}>
                <AppText>No favourites yet!</AppText>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.bg.primary,
        padding: theme.space[1],
    }
})
