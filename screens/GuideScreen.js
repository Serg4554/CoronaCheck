import React, { useState } from "react"

import { ImageBackground, StyleSheet, Text, View } from "react-native"
import { ScrollView } from 'react-native-gesture-handler'

import HeaderText from "../components/HeaderText"
import SelectorComponent from "../components/SelectorComponent"

import GuideAppScreen from "../screens/GuideAppScreen"
import GuideSymptomsScreen from "../screens/GuideSymptomsScreen"
import GuidePreventionScreen from "../screens/GuidePreventionScreen"

import HeaderStyle from "../styles/HeaderStyleApp"

import IMAGES from "../constants/Images"
import { DefaultMargin } from "../constants/Layout"

export const GuideScreen = props => {
  var [selectedScreen, setSelectedScreen] = useState(0)
  let svRef = React.createRef()

  return (
    <ImageBackground source={IMAGES.Background} style={IMAGES.BackgroundStyle}>
      <View style={styles.container}>
        <HeaderText style={HeaderStyle}>
          Guide
        </HeaderText>
        <View style={styles.selector}>
          <SelectorComponent title="App" active={selectedScreen === 0} onPressCallback={() => {setSelectedScreen(0) ; svRef.current.scrollTo({x: 0, y: 0, animated: true})}} />
          <SelectorComponent title="Symptoms" active={selectedScreen === 1} onPressCallback={() => { setSelectedScreen(1) ; svRef.current.scrollTo({x: 0, y: 0, animated: true})}} />
          <SelectorComponent title="Prevention" active={selectedScreen === 2} onPressCallback={() => { setSelectedScreen(2) ; svRef.current.scrollTo({x: 0, y: 0, animated: true})}} />
        </View>
        <ScrollView ref={svRef}>
          {
            selectedScreen === 0 ? <GuideAppScreen /> :
            selectedScreen === 1 ? <GuideSymptomsScreen /> :
            selectedScreen === 2 ? <GuidePreventionScreen /> :
            undefined
          }
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

export default GuideScreen

const styles = StyleSheet.create({
  selector: {
    flexDirection: "row",
    marginBottom: 40
  },

  container: {
    marginHorizontal: DefaultMargin,
    flex: 1
  },
})