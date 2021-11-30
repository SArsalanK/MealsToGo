import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from 'firebase/app';

import { theme } from './app/infrastructure/theme';
import { Navigation } from './app/infrastructure/navigation';
import { RestaurantsContextProvider } from './app/services/restaurants/restaurants.context';
import { LocationContextProvider } from './app/services/location/location.context';
import { FavouritesContextProvider } from './app/services/favourites/favourites.context';
import { AuthenticationContextProvider } from './app/services/authentication/authentication.context';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAa8xDah7d0KTCnxExn4eRgbexDhkB4Wjw",
  authDomain: "mealstogo-b76dc.firebaseapp.com",
  projectId: "mealstogo-b76dc",
  storageBucket: "mealstogo-b76dc.appspot.com",
  messagingSenderId: "1053939616662",
  appId: "1:1053939616662:web:5d625565e4e3c95a282bb7"
};

if (initializeApp.length) {
  initializeApp(firebaseConfig);
}

export default function App() {

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null
  }

  return (
    <View style={styles.container}>
      <AuthenticationContextProvider>
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </AuthenticationContextProvider>
      <ExpoStatusBar style='auto' />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.bg.primary,
  },
});

