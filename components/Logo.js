import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
   Image 
} from 'react-native';

    export default class Logo extends React.Component {
	render(){
		return(
			<View style={styles.container}>
				<Image  style={{width:80, height: 64}}
          			source={require('../images/fab.png')}/>
          		<Text style={styles.logoText}>Welcome to My app.</Text>	
  			</View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    flexGrow: 0,
    justifyContent:'flex-end',
    alignItems: 'center'
  },
  logoText : {
  	marginVertical: 10,
  	fontSize:18,
  	color:'rgba(255, 255, 255, 0.7)'
  }
});