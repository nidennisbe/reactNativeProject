import React, { Component } from 'react';
import MapView from 'react-native-maps';

import {
  View,
  Text,
  Alert,
  Image,
  Button,
  StyleSheet,
} from 'react-native';

export default class Camera extends Component {
  static navigationOptions = {
        title: 'Camera',
        headerTintColor: '#ffffff',
        headerStyle: {
          backgroundColor: '#2F95D6',
          borderBottomColor: '#ffffff',
          borderBottomWidth: 3,
        },
        headerTitleStyle: {
          fontSize: 18,
        },
    };
  render() {
    const { region } = this.props;
    console.log(region);
    const style = StyleSheet.create({
    text: {
      textAlign: 'center',
      color:'red',
      fontWeight:'bold',
      alignItems:'center',
      fontSize:28,
      justifyContent: 'center',
    },
    map: {
   ...StyleSheet.absoluteFillObject,
 },
});
      return(
          <View>
          <Text style={style.text}>Camera Screen </Text>

          </View>

      );
  }





}
