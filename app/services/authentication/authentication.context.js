import React, { useState, createContext, useEffect } from 'react'
import { View, Text, BackHandler } from 'react-native'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [user, setUser] = useState(null)

    const backAction = () => {
        setError(null)
    }

    const checkAuthStateChanged = () => {
        onAuthStateChanged(getAuth(), (usr) => {
            if (usr) {
                setUser(usr)
                const uid = usr.uid;
                setIsLoading(false)
                console.log("uid", uid)
            } else {
                setIsLoading(false)
            }
        });
    }

    useEffect(() => {
        checkAuthStateChanged()
        BackHandler.addEventListener("hardwareBackPress", backAction);
        return () =>
            BackHandler.removeEventListener("hardwareBackPress", backAction);
    }, [])

    const onLogout = () => {
        signOut(getAuth()).then(() => {
            // Sign-out successful.
            setUser(null)
            setError(null);
        }).catch((error) => {
            // An error happened.
            console.log(error)
        });
    }

    const onLogin = (email, password) => {
        setError(null)
        setIsLoading(true)
        signInWithEmailAndPassword(getAuth(), email, password).then((userCredential) => {
            setIsLoading(false)
            const loggedInUser = userCredential.user;
            console.log('\nsuccessdfully logged in :\n', loggedInUser.providerData)
            setUser(loggedInUser)
            setError(null)
        }).catch((err) => {
            console.log(err.message)
            setIsLoading(false)
            setError(err.message)
        });
    }

    const onRegister = (email, password, repeatedPassword) => {
        setError(null)
        if (password !== repeatedPassword) {
            setError('\nError: Passwords do not match\n')
            return
        }
        setIsLoading(true)
        createUserWithEmailAndPassword(getAuth(), email, password).then((registeredUser) => {
            setUser(registeredUser)
            setIsLoading(false)
        }).catch((err) => {
            console.log(err.message)
            setIsLoading(false)
            setError(err.message)
        })
    }

    return (
        <AuthenticationContext.Provider value={{ user, isLoading, error, isAuthenticated: !!user, onLogin, onRegister, onLogout }}>{children}</AuthenticationContext.Provider>
    )
}
