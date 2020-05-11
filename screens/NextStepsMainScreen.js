import React from 'react'

import { StyleSheet, Text, View } from 'react-native'

import COLORS from "../constants/Colors"
import SIZES from "../constants/Sizes"

export const NextStepsMainScreen = props => {
  return (
    <View>
      <Text style={styles.text}>Protect your family, friends and community by staying home.</Text>
      <Text style={styles.text}><Text style={styles.emphasized}>Call this hotline</Text> to get tested as soon as you can.</Text>
      <Text style={styles.text}>The result of this app is based on calculated risk — there is a chance you may not have been exposed.</Text>
      <Text style={styles.text}>If you have a fever and/or a new continuous cough, it is likely you may have been infected.</Text>
      <Text style={styles.text}>You can usually treat coronavirus at home.</Text>
      <Text style={styles.text}>Treatment aims to relieve the symptoms (e.g. Paracetamol) while your body fights the illness.</Text>
    </View>
  );
}

export default NextStepsMainScreen

const styles = StyleSheet.create({
  text: {
    fontSize: SIZES.guideText,
    color: COLORS.guideText,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 10
  },
  emphasized: {
    color: COLORS.altTintColor
  }
})