import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Card, Title, Paragraph } from 'react-native-paper'
import { fonts, fontSizes, fontWeights } from '../../../infrastructure/theme/fonts'
import { SvgXml } from 'react-native-svg';

import AppText from '../../../components/AppText';
import { theme } from '../../../infrastructure/theme/index'
import star from '../../../assets/star'
import open from '../../../assets/open'
import FavouriteComponent from '../../../components/favoutites/favourite.component';

export default function ResturantInfoCard({ restaurant }) {

    // console.log("restaurant: ", restaurant)

    const ratingArray = Array.from(new Array(Math.floor(restaurant.rating)))

    return (
        <View style={styles.listContainer}>
            <Card elevation={theme.space[1]}>
                <FavouriteComponent restaurant={restaurant} />
                <Card.Cover style={styles.cardCover} source={{ uri: restaurant.photos[0] }} />
                <View style={{ padding: theme.space[3] }}>
                    <AppText fontFamily={fonts.heading} fontSize={theme.fontSizes.title} >{restaurant.name}</AppText>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        {ratingArray && <View style={{ marginVertical: theme.space[1], flexDirection: 'row' }}>
                            {ratingArray.map((_, index) => (
                                <SvgXml key={`star-${restaurant.placeId}-${index}`} xml={star} width={theme.sizes[5]} height={theme.sizes[5]} />
                            ))}
                        </View>}
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            {restaurant.isClosedTemporarily && <AppText color={theme.colors.text.error} fontFamily={theme.fonts.monospace} fontSize={theme.fontSizes.body} >'CLOSED TEMPORARILY'</AppText>}
                            {restaurant.isOpenNow && <SvgXml style={{ marginLeft: theme.space[3] }} xml={open} width={theme.sizes[4]} height={theme.sizes[4]} />}
                            {restaurant.icon && <Image borderRadius={theme.sizes[1]} style={{ marginLeft: theme.space[3], width: theme.sizes[4], height: theme.sizes[4] }} source={{ uri: restaurant.icon }}></Image>}
                        </View>
                    </View>
                    {restaurant.address && <AppText fontFamily={theme.fonts.body} fontSize={theme.fontSizes.caption}>{restaurant.address}</AppText>}
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        padding: theme.space[2],
    },
    cardCover: {
        borderRadius: theme.sizes[1],
        backgroundColor: theme.colors.bg.primary,
        margin: theme.space[2],
    }
})
