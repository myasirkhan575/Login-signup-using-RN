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
  TouchableOpacity,
  Image


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
            <Text style={{ color: 'black', marginTop: -160, textAlign: 'center', fontWeight: 'bold' }}>or</Text>
          </View>
          <View style={styles.MainContainer}>

            <TouchableOpacity
              style={styles.SubmitButtonStyle2}
              activeOpacity={.5}

            >
              <Text style={styles.TextStyle}> Create New Account </Text>
            </TouchableOpacity>
            <Text style={{ textAlign: 'center', fontWeight: 'bold', marginTop: 10 }}>or login with</Text>
            {/* <View style={styles.sclbuttons}>
            <View style={{ flexDirection: 'column' }}>
                <SocialIcon
                  type="facebook"
                  onPress={() => {
                    alert('facebook');
                  }}
                />
                <Text style={{ textAlign: 'center' }}>facebook</Text>
                <SocialIcon
                  type="google"
                  onPress={() => {
                    alert('google');
                  }}
                />
                <Text style={{ textAlign: 'center' }}>google</Text>
              </View>
            </View> */}
            <TouchableOpacity style={[styles.buttonContainer, styles.fabookButton]}>
              <View style={styles.socialButtonContent}>
                <Image style={styles.icon} source={{ uri: 'https://png.icons8.com/facebook/androidL/40/FFFFFF' }} />
                <Text style={styles.loginText}>Continue with facebook</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttonContainer, styles.googleButton]}>
              <View style={styles.socialButtonContent}>
                <Image style={styles.icon} source={{ uri: 'https://png.icons8.com/google/androidL/40/FFFFFF' }} />
                <Text style={styles.loginText}>Sign in with google</Text>
              </View>
            </TouchableOpacity>

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
    marginTop: 35,
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
    marginTop: -90,
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

  // sclbuttons: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   flexDirection: 'column-reverse',
  //   justifyContent: 'space-between',

  icon: {
    width: 30,
    height: 30,
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 15,
    width: 250,
    borderRadius: 30,
    marginLeft: 80
  },
  loginButton: {
    backgroundColor: '#3498db',
  },
  fabookButton: {
    backgroundColor: "#3b5998",
  },
  googleButton: {
    backgroundColor: "#ff0000",
  },
  socialButtonContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialIcon: {
    color: "#FFFFFF",
    marginRight: 5

  }



})
export default App;
