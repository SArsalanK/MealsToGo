import React from 'react'
import CompactRestaurantInfoComponent from '../../../components/compact-restaurant-info.component'

export default function MapCalloutComponent({ restaurant }) {
    return (
        <CompactRestaurantInfoComponent restaurant={restaurant} isMap />
    )
}

