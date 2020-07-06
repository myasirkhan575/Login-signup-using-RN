/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import
{
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  ImageBackground,
  Dimensions,
  TouchableOpacity


} from 'react-native';

import
{
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Button, SocialIcon, ButtonGroup } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const backgroundImage = require('../login/images.jpg')
const { width, height } = Dimensions.get("window")


const App = (props) =>
{




  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{
        flex: 1
      }}>
        <View style={{ position: 'absolute', borderColor: 'gray', borderWidth: 2, zIndex: 1, width: width, height: height, marginLeft: 10, marginRight: 10, marginBottom: 10, marginTop: 10 }}></View>
        <ImageBackground source={backgroundImage} style={{
          flex: 1,
          resizeMode: "cover",
          justifyContent: "center",
          height: height,
        }} >

          <TextInput
            style={styles.txtinp1} placeholder="Email" />
          <TextInput
            style={styles.txtinp2} placeholder="Password" />

          <View style={styles.MainContainer}>

            <TouchableOpacity
              style={styles.SubmitButtonStyle}
              activeOpacity={.5}
            // onPress={ this.ButtonClickCheckFunction }
            >
              <Text style={styles.TextStyle}> Login </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{ color: 'black', marginTop: -105, textAlign: 'center', fontWeight: 'bold' }}>or</Text>
          </View>
          <View style={styles.MainContainer}>

            <TouchableOpacity
              style={styles.SubmitButtonStyle2}
              activeOpacity={.5}
            // onPress={ this.ButtonClickCheckFunction }
            >
              <Text style={styles.TextStyle}> Create New Account </Text>
            </TouchableOpacity>
            <Text style={{ textAlign: 'center', fontWeight: 'bold', marginTop: 10 }}>or login with</Text>
          </View>

        </ImageBackground>
      </ScrollView>
    </SafeAreaView>





  );
};

const styles = StyleSheet.create({
  txtinp1: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 250,
    borderRadius: 15,
    marginLeft: 40,
    marginRight: 40,
    textAlign: "center",
    color: 'black'
  },
  txtinp2: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 15,
    borderRadius: 15,
    marginLeft: 40,
    marginRight: 40,
    textAlign: "center",
    color: 'black'
  },
  MainContainer: {
    flex: 1,
    // justifyContent: 'center',

  },

  SubmitButtonStyle: {
    marginTop: 15,
    paddingTop: 5,
    paddingBottom: 5,
    marginLeft: 100,
    marginRight: 100,
    // backgroundColor:'#00BCD4',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'black'
  },
  SubmitButtonStyle2: {
    marginTop: -75,
    paddingTop: 5,
    paddingBottom: 5,
    marginLeft: 100,
    marginRight: 100,
    // backgroundColor:'#00BCD4',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'black'
  },
  TextStyle: {

    textAlign: 'center',
    color: 'black'
  },
  // scl1: {
  //   marginLeft: 30,
  //   marginRight: 250,
  //   // flex: 1,
  //   flexDirection: "row"
  // },
  // scl2: {
  //   marginLeft: 250,
  //   marginRight: 20,
  //   flexDirection:"row"
  // }



})
export default App;
