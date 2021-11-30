import React, { useState, createContext, useEffect } from 'react'
import { View, Text } from 'react-native'

import { loginRequest } from './service.authentication';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [user, setUser] = useState(null)

    const onLogin = (email, password) => {
        setIsLoading(true)
        loginRequest(email, password).then((userCredential) => {
            setIsLoading(false)
            const loggedInUser = userCredential.user;
            console.log('\nsuccessdfully logged in :\n', loggedInUser)
            setUser(loggedInUser)
        }).catch((error) => {
            setIsLoading(false)
            setError(error)
            console.log(error)
        });
    }

    return (
        <AuthenticationContext.Provider value={{ user, isLoading, error, isAuthenticated: !!user, onLogin }}>{children}</AuthenticationContext.Provider>
    )
}
