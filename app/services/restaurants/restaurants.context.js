import React, { useState, useEffect, useMemo, createContext, useContext } from 'react'
import { restaurantsRequest, restaurantTransform } from './restaurants.services'

import { LocationContext } from '../location/location.context'

export const RestaurantsContext = createContext()

export const RestaurantsContextProvider = ({ children }) => {

    const [restaurants, setRestaurants] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const { location } = useContext(LocationContext)

    const retrieveRestaurants = (locationString) => {
        setIsLoading(true)
        setRestaurants([])
        setTimeout(() => {
            restaurantsRequest(locationString).then(restaurantTransform).then((results) => {
                setIsLoading(false)
                setRestaurants(results)
                // console.log("retrieveRestaurants results: \n\n" + JSON.stringify(results))
            }).catch((error) => {
                setIsLoading(false)
                // console.log("retrieveRestaurants error: \n\n" + JSON.stringify(error))
            });
        }, 2000)
    }

    useEffect(() => {
        if (location) {
            const formattedString = `${location.lat},${location.lng}`
            retrieveRestaurants(formattedString)
        }
    }, [location])

    return (<RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>{children}</RestaurantsContext.Provider>);
}

