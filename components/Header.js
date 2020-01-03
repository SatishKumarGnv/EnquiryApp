import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import Logo from './Logo';

export default class AssetExample extends React.Component {
  render() {
    return (
      <View > 
        {/*<Text style={styles.paragraphs}>
          MyApp
    </Text>*/}
    <Logo/>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
    
  paragraphs: {
    margin: 0,
    marginBottom:10,
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center', 
  },
});
