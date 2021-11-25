import React, { createContext, useState, useEffect } from 'react'
import { locationRequest, locationTransform } from './location.service'

export const LocationContext = createContext()

export const LocationContextProvider = ({ children }) => {
    const [location, setLocation] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [keyword, setKeyword] = useState('chicago')

    const onSearch = (searchKeyword) => {
        setIsLoading(true)
        setKeyword(searchKeyword)
        console.log("searchKeyword: " + searchKeyword)
    }

    useEffect(() => {
        if (!keyword.length) {
            return
        }

        locationRequest(keyword.toLowerCase()).then(locationTransform).then(result => {
            setIsLoading(false)
            setLocation(result)
            console.log("locationRequest result: \n\n" + JSON.stringify(result))
        }).catch((err) => {
            console.log("locationRequest error: \n\n" + JSON.stringify(err))
            setIsLoading(false)
            setError(error)
        })
    }, [keyword])

    return (<LocationContext.Provider value={{ isLoading, error, location, search: onSearch, keyword }} >{children}</LocationContext.Provider>)

}
