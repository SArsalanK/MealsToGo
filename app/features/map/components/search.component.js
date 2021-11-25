import React, { useContext, useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { Searchbar } from 'react-native-paper';

import { theme } from '../../../infrastructure/theme';
import { LocationContext } from '../../../services/location/location.context';

export const SearchContaier = () => {
    const { keyword, search } = useContext(LocationContext)
    const [searchKeyword, setSearchKeyword] = useState(keyword)

    useEffect(() => {
        setSearchKeyword(keyword)
    }, [keyword])

    return (<Searchbar icon={'map'} style={styles.searchBarContainer} placeholder={'Search for a location'} value={searchKeyword} onSubmitEditing={() => search(searchKeyword)} onChangeText={(text) => setSearchKeyword(text)} />)
}

const styles = StyleSheet.create({
    searchBarContainer: {
        margin: theme.space[3],
        marginTop: theme.space[9],
        position: 'absolute',
        marginBottom: theme.space[1],
        zIndex: 999,
    },
})