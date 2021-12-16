import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { List, Divider } from 'react-native-paper'

import ResturantInfoCard from '../components/resturant-info-card-component'
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context'
import { theme } from '../../../infrastructure/theme'

export default function RestaurantDetailScreen({ navigation, route }) {

    const [breakfastExpanded, setBreakfastExpanded] = useState(false);
    const [lunchExpanded, setLunchExpanded] = useState(false);
    const [dinnerExpanded, setDinnerExpanded] = useState(false);
    const [drinksExpanded, setDrinksExpanded] = useState(false);

    const { restaurant } = route.params;

    return (
        <View style={styles.container}>
            <ResturantInfoCard restaurant={restaurant}></ResturantInfoCard>
            <ScrollView>
                <List.Accordion
                    title="Breakfast"
                    titleStyle={styles.accordianFont}
                    style={styles.itemBackgroundColor}
                    left={(props) => <List.Icon {...props} icon="bread-slice" />}
                    expanded={breakfastExpanded}
                    onPress={() => setBreakfastExpanded(!breakfastExpanded)}
                >
                    <Divider />
                    <List.Item titleStyle={styles.accordianItemFont} title="Eggs Benedict" />
                    <Divider />
                    <List.Item titleStyle={styles.accordianItemFont} title="Classic Breakfast" />
                </List.Accordion>
                <Divider />
                <List.Accordion
                    title="Lunch"
                    titleStyle={styles.accordianFont}
                    style={styles.itemBackgroundColor}
                    left={(props) => <List.Icon {...props} icon="hamburger" />}
                    expanded={lunchExpanded}
                    onPress={() => setLunchExpanded(!lunchExpanded)}
                >
                    <Divider />
                    <List.Item titleStyle={styles.accordianItemFont} title="Burger w/ Fries" />
                    <Divider />
                    <List.Item titleStyle={styles.accordianItemFont} title="Steak Sandwich" />
                    <Divider />
                    <List.Item titleStyle={styles.accordianItemFont} title="Mushroom Soup" />
                    <Divider />
                </List.Accordion>
                <Divider />
                <List.Accordion
                    title="Dinner"
                    titleStyle={styles.accordianFont}
                    style={styles.itemBackgroundColor}
                    left={(props) => <List.Icon {...props} icon="food-variant" />}
                    expanded={dinnerExpanded}
                    onPress={() => setDinnerExpanded(!dinnerExpanded)}
                >
                    <Divider />
                    <List.Item titleStyle={styles.accordianItemFont} title="Spaghetti Bolognese" />
                    <Divider />
                    <List.Item titleStyle={styles.accordianItemFont} title="Veal Cutlet with Chicken Mushroom Rotini" />
                    <Divider />
                    <List.Item titleStyle={styles.accordianItemFont} title="Steak Frites" />
                </List.Accordion>
                <Divider />

                <List.Accordion
                    title="Drinks"
                    titleStyle={styles.accordianFont}
                    style={styles.itemBackgroundColor}
                    left={(props) => <List.Icon {...props} icon="cup" />}
                    expanded={drinksExpanded}
                    onPress={() => setDrinksExpanded(!drinksExpanded)}
                >
                    <Divider />
                    <List.Item titleStyle={styles.accordianItemFont} title="Coffee" />
                    <Divider />
                    <List.Item titleStyle={styles.accordianItemFont} title="Tea" />
                    <Divider />
                    <List.Item titleStyle={styles.accordianItemFont} title="Modelo" />
                    <Divider />
                    <List.Item titleStyle={styles.accordianItemFont} title="Coke" />
                    <Divider />
                    <List.Item titleStyle={styles.accordianItemFont} title="Fanta" />
                </List.Accordion>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.bg.primary
    },
    itemBackgroundColor: {
        backgroundColor: theme.colors.bg.primary,
    },
    accordianFont: {
        fontFamily: theme.fonts.heading
    },
    accordianItemFont: {
        fontFamily: theme.fonts.monospace
    }
});
