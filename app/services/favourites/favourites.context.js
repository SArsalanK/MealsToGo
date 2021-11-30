import React, { createContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FavouritesContext = createContext()

export const FavouritesContextProvider = ({ children }) => {

    const [favourites, setFavourites] = useState([])

    const add = (restaurant) => {
        setFavourites([...favourites, restaurant])
    }

    const remove = (restaurant) => {
        const newFavourites = favourites.filter((x) => x.placeId !== restaurant.placeId)
        setFavourites(newFavourites)
    }

    const saveFavourites = async (value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('@favourites', jsonValue)
        } catch (e) {
            console.log("error storing", e)
        }
    }

    const loadFavuorites = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@favourites')
            if (jsonValue != null) {
                return setFavourites(JSON.parse(jsonValue))
            }
        } catch (e) {
            console.log("error loading", e)
        }
    }

    useEffect(() => {
        loadFavuorites(favourites)
    }, [])

    useEffect(() => {
        saveFavourites(favourites)
    }, [favourites])

    return (<FavouritesContext.Provider value={{ favourites, addToFavoutites: add, removeFromFavourites: remove }}>{children}</FavouritesContext.Provider>)

}