import React from 'react'
import { Text } from 'react-native'
import { theme } from '../infrastructure/theme/index'

export default function AppText({ color = theme.colors.text.primary, fontFamily = theme.fonts.heading, fontWeight = theme.fontWeights.normal, fontSize = theme.fontSizes.body, style, children, ...otherProps }) {
    return (
        <Text style={[style, { color: color, fontFamily: fontFamily, fontSize: fontSize, fontWeight: fontWeight }]} {...otherProps}>{children}</Text>
    )
}
