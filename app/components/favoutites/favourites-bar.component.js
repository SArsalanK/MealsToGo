import React, { useContext } from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { Card } from 'react-native-paper'

import { theme } from '../../infrastructure/theme'
import CompactRestaurantInfoComponent from '../compact-restaurant-info.component'
import AppText from '../AppText'

export default function FavouritesBarComponent({ favourites, onNavigate }) {

    if (!favourites.length) {
        return null;
    }

    return (
        <Card elevation={3} style={styles.container}>
            <AppText style={styles.text} fontFamily={theme.fonts.monospace} fontSize={theme.fontSizes.button} >Favourites</AppText>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {favourites.map((restaurant) => {
                    return (
                        <TouchableOpacity onPress={() => { onNavigate('RestaurantDetail', { restaurant }) }} style={styles.item} key={restaurant.name}>
                            <CompactRestaurantInfoComponent restaurant={restaurant} />
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        </Card>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: theme.space[1],
        margin: theme.space[2],
    },
    item: {
        marginLeft: theme.space[2],
    },
    text: {
        marginLeft: theme.space[1],
    }
})
