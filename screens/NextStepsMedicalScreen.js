import React from 'react'

import { StyleSheet, Text, View } from 'react-native'

import COLORS from "../constants/Colors"
import SIZES from "../constants/Sizes"

export const NextStepsMedicalScreen = props => {
  return (
    <View>
      <Text style={styles.text}>Please avoid leaving home if you or someone you live with has either a high temperature and/or new, continuous cough.</Text>
      <Text style={styles.text}>Be sure to observe your government <Text style={styles.emphasized}>stay-at-home guidelines.</Text></Text>
      <Text style={styles.text}>Drink plenty of water to stay hydrated – your urine should be pale and clear.</Text>
      <Text style={styles.text}>Take paracetamol to help ease your symptoms.</Text>
      <Text style={styles.text}>Stay in touch with family and friends over the phone or on social media.</Text>
      <Text style={styles.text}>Try to keep yourself busy – you could try activities like cooking, reading, online learning and watching films.</Text>
      <Text style={styles.text}>Do light exercise.</Text>
    </View>
  );
}

export default NextStepsMedicalScreen

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