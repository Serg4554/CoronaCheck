import React from 'react'
import { StyleSheet, Text } from 'react-native'

import SIZES from "../constants/Sizes"
import COLORS from "../constants/Colors"

const LinkText = props => <Text 
  {...props} 
  style={[styles.regularText, props.style]}
/>

export default LinkText


var styles = StyleSheet.create({
  regularText: {
    fontSize: SIZES.linkSize,
    color: COLORS.linkColor,
    textAlign: 'left',
    fontFamily: 'Niveau-Grotesk',
  }
})
