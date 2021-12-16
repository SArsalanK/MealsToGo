import React, { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign } from "@expo/vector-icons";

import { theme } from '../../infrastructure/theme'
import { FavouritesContext } from '../../services/favourites/favourites.context'

export default function FavouriteComponent({ restaurant }) {

    const { favourites, addToFavoutites, removeFromFavourites } = useContext(FavouritesContext);

    const isFavourite = favourites.find((r) => r.placeId === restaurant.placeId)

    return (
        <TouchableOpacity style={styles.container} onPress={() => !isFavourite ? addToFavoutites(restaurant) : removeFromFavourites(restaurant)}>
            <AntDesign name={isFavourite ? 'heart' : 'hearto'} size={theme.sizes[6]} color={isFavourite ? theme.colors.ui.error : theme.colors.ui.tertiary}></AntDesign>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: theme.space[6],
        right: theme.space[6],
        zIndex: 9,
    }
})
