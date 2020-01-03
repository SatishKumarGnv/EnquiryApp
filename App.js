import * as React from 'react';
import { Text, View, StyleSheet,Platform } from 'react-native';
import Constants from 'expo-constants';
import {
  createAppContainer
} from 'react-navigation';
// You can import from local files
import Login from './components/Login';
import CustomApp from './assets/CustomApp';
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <CustomApp/>
      </View>
    );
    // return <Appcontainer/>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //  paddingTop: 10,
    // paddingBottom:23,
    height:Platform.OS == 'android'? 0 : 25,
    bottom:0,
    height: 0,
    backgroundColor: '#54AFDD',
    // padding: 10,
    // top:15,
    // maxHeight: 735,
  },
});
