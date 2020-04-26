import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'
import Button from './../components/Button'
import HeaderText from './../components/HeaderText'
import LineText from '../components/LineText'
import Modal from './../components/Modal'
import DaysSelectControl from './../components/DaysSelectControl'
import { Consumer as UserStatusConsumer } from './../global/userStatus'
import ReportThankyouScreen from './ReportThankyouScreen'
import ScanQRCodeScreen, { stackHeader } from './ScanQRCode'
import * as centralAPI from './../global/centralAPI'
import { getDeviceId } from './../global/deviceId'
import SIZES from '../constants/Sizes'
import COLORS from '../constants/Colors'

import Icon from 'react-native-vector-icons/MaterialIcons'

import { createStackNavigator } from '@react-navigation/stack';
import StackHeaderText from '../components/StackHeaderText'

// Used to calculate image dimensions
const deviceWidth = Dimensions.get('window').width;
const ratio = 365/771;

export const ReportInfectedScreen = (props) => {


  var [hasPermission, setHasPermission] = useState(null)
  var [showBarCodeScanner, setShowBarCodeScanner] = useState(false)
  var [scanned, setScanned] = useState(false)
  var [errorMessage, setErrorMessage] = useState(null)
  var [modalVisible, setModalVisible] = useState(false)

  function funShowBarcodeScanner() {
    props.navigation.navigate("Scan")
  }

  return <UserStatusConsumer>
    {status => {
      // if (status.infected)
      //   return <ReportThankyouScreen />
        return(
          <View style={styles.container}>

            <Modal visible={errorMessage} onRequestClose={() => {setModalVisible(false);setErrorMessage(null)}}>
              <Text>{errorMessage}</Text>
            </Modal>

            <HeaderText style={styles.headerTextTop}>
              Share your COVID-19 test results anonymously.
            </HeaderText>

            <HeaderText style={styles.subheaderText}>
              QR Scan
            </HeaderText>

            <TouchableOpacity
              style={styles.imageContainer}
              onPress={async () => {
                const { status } = await BarCodeScanner.requestPermissionsAsync();
                setHasPermission(status === "granted")
                // setShowBarCodeScanner(hasPermission)
                if (status === "granted")
                  funShowBarcodeScanner()
              }}
              >
              <Image source={require("../assets/images/qrscan.png")} resizeMode={"contain"} style={styles.qrImage} />
            </TouchableOpacity>

            <LineText title="Or" />

            <HeaderText style={styles.subheaderText}>
              Type PIN Code
            </HeaderText>

            <TextInput
              style={styles.textInputPin}
              placeholder="COV9 - IT42"
              autoCorrect={false}
              autoCompleteType={"off"}
              autoCapitalize={"characters"}
            />
            
          </View>
        )
      }
    }
  </UserStatusConsumer>
}

export default ReportInfectedScreen

const AlertStack = createStackNavigator();
export function ReportNavigator() {
  return(
    <AlertStack.Navigator>
      <AlertStack.Screen options={{headerShown: false}} name="MAIN" component={ReportInfectedScreen} />
      <AlertStack.Screen options={
          ({navigation}) => ({
            headerTransparent: true,
            // headerTransparent: true,
            title: "",
            headerLeft: () => (
              <StackHeaderText onPress={ () => navigation.goBack() } ><Icon name="keyboard-arrow-left" size={SIZES.stackHeaderSize} />Back</StackHeaderText>
            ),
          })
        }
        name="Scan"
        component={ScanQRCodeScreen} />
      </AlertStack.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  headerTextTop: {
    flex: 0,
    flexDirection: "row",
    marginTop: "15%",
    fontSize: SIZES.reportHeaderSize,
    color: COLORS.reportHeaderText,
    textAlign: "left",
    paddingBottom: 30
  },

  headerText: {
    fontSize: SIZES.reportHeaderSize,
    color: COLORS.altTintColor,
    textAlign: "left"
  },

  subheaderText: {
    color: COLORS.altTintColor,
    fontSize: SIZES.reportAltHeaderSize,
    textAlign: "left"
  },
  
  qrImage: {
    flex: 1,
    height: undefined,
    width: undefined
  },

  textInputPin: {
    borderRadius: 10,
    backgroundColor: COLORS.textInputBackground,
    height: 65,
    marginHorizontal: "10%",
    marginTop: 22,
    textAlign: "center",
    fontSize: 27,
    fontWeight: "bold"
  },

  imageContainer: {
    height: deviceWidth * 0.8 * ratio,
    width: deviceWidth * 0.8,
    marginHorizontal: "10%",
    marginVertical: 10
  },

  explanationText: {
    flex: 1,
    paddingLeft: 40,
    paddingRight: 40,
    alignItems: 'center',
    alignContent: 'center',
  },
  daysControlContainer: {
    flex: 3,
  },
  confirmContainer: {
    flex: 0.7,
    flexDirection: 'row',
  },
  confirmButtonContainer: {
    flex: 3,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
  },
  confirmCheckboxContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  confirmCheckbox: {
  },
  confirmTextContainer: {
    paddingRight: 20,
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  confirmText: {
    color: '#3750B5',
    fontSize: 17,
    fontFamily: 'Niveau-Grotesk',
  },
  errorContainer: {
    flex: 3,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
  },
  errorMessage: {
    fontSize: 17,
    color: COLORS.errorText,
    lineHeight: 24,
    textAlign: 'center',
    backgroundColor: COLORS.errorBackground,
  },
}) 
