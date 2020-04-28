import React, { useState } from "react"

import { ImageBackground, Image, StyleSheet, View } from "react-native"
import { useHeaderHeight } from '@react-navigation/stack'
import { ScrollView } from 'react-native-gesture-handler'

import HeaderText from "../components/HeaderText"
import SelectorComponent from "../components/SelectorComponent"

import NextStepsMainScreen from "../screens/NextStepsMainScreen"
import NextStepsMedicalScreen from "../screens/NextStepsMedicalScreen"

import IMAGES from "../constants/Images"
import SIZES from "../constants/Sizes"
import COLORS from "../constants/Colors"
import { DefaultMargin } from "../constants/Layout"

export const NextStepsScreen = props => {

  const headerHeight = useHeaderHeight()

  var [selectedScreen, setSelectedScreen] = useState(0)
  let svRef = React.createRef()

  return (
    <ImageBackground source={IMAGES.Background} style={IMAGES.BackgroundStyle}>
      <View style={[styles.container, {paddingTop: headerHeight}]}>

        <View style={styles.logoContainer}>
          <Image source={IMAGES.LogoText} resizeMode={"cover"} resizeMethod={"resize"} style={styles.logoStyle} />
        </View>

        <HeaderText style={styles.headerText}>
          Next steps
        </HeaderText>

        <View style={styles.selector}>
          <SelectorComponent title="Main Facts" active={selectedScreen === 0} onPressCallback={() => {setSelectedScreen(0) ; svRef.current.scrollTo({x: 0, y: 0, animated: true})}} />
          <SelectorComponent title="Medical Treatments" active={selectedScreen === 1} onPressCallback={() => { setSelectedScreen(1) ; svRef.current.scrollTo({x: 0, y: 0, animated: true})}} />
        </View>

        <ScrollView ref={svRef}>
          {
            selectedScreen === 0 ? <NextStepsMainScreen /> :
            selectedScreen === 1 ? <NextStepsMedicalScreen /> :
            undefined
          }
        </ScrollView>

      </View>
    </ImageBackground>
  );
}

export default NextStepsScreen

const styles = StyleSheet.create({

  selector: {
    marginTop: 10,
    flexDirection: "row",
    marginBottom: 20
  },

  container: {
    marginHorizontal: DefaultMargin,
    flex: 1
  },

  logoContainer: {
    marginBottom: 10
  },

  logoStyle: {
    height: IMAGES.LogoSmallHeight,
    width: IMAGES.LogoSmallHeight * IMAGES.LogoSmallRatio
  },

  headerText: {
    fontSize: SIZES.selfReportHeader,
    color: COLORS.altTintColor,
    textAlign: "left",
    flex: 0,
    flexDirection: "row"
  }
})