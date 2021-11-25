import React, { useContext, useState, useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import MapView from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';

import AppText from '../../../../components/AppText'
import { theme } from '../../../../infrastructure/theme';
import { SearchContaier } from '../search.component';
import { LocationContext } from '../../../../services/location/location.context';
import { RestaurantsContext } from '../../../../services/restaurants/restaurants.context';

export default function MapScreen() {

    const { keyword, search, location } = useContext(LocationContext)
    const { restaurants, isLoading, error } = useContext(RestaurantsContext)

    const [latDelta, setLatDelta] = useState(0)

    const { lat, lng, viewport } = location;
    console.log(" \n\nviewport" + JSON.stringify(viewport))

    useEffect(() => {
        const northeastLat = viewport.northeast.lat;
        const southwestLat = viewport.southwest.lat;

        const latDelta = northeastLat - southwestLat
        setLatDelta(latDelta)

    }, [location, viewport])

    return (
        <View style={styles.container}>
            <SearchContaier />
            <MapView style={styles.map} region={{ latitude: lat, longitude: lng, latitudeDelta: latDelta, longitudeDelta: 0.02 }} >
                {

                    // restaurants.map((restaurant) => {

                    //     return null;

                    // })
                }
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.bg.primary,
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});