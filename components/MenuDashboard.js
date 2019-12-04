import React, { Component } from 'react';
import { Button, StyleSheet, View,ScrollView,Text, TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class MenuDashboard extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = { 
      _onPressButton:this._onPressButton.bind(this),
      casevalue:1 
    };
  } 
  _onPressButton(txt) { 
    // Actions.clusternativemarkers();
    this.setState({
      casevalue: txt
  });

    switch(txt) {
 
      case '1': 
        Actions.clusternativemarkers();
        break;
      
      case '2':
        Actions.animatedmap();
        break;
 
      case '3':
        Actions.square();
        break;
 
      case '4':
        Actions.list();
        break;
 
      case '5':
      Actions.slider();
      break;

      case '6':
      Actions.animatedNav();
      break;

      case '7':
      Actions.nmap();
      break;

      case '8':
      Actions.dashboard();
      break;

      case '9':
      Actions.foodDashboard();
      break;

      case '10':
      Actions.currentlocation();
      break;
      
      default:
        // Actions.dashboard();
    
      }

  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.alternativeLayoutButtonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => this.state._onPressButton('1')}  >
        <Text style={styles.buttonText}>{'Cluster Map'}</Text>
      </TouchableOpacity>
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => this.state._onPressButton('2')} >
        <Text style={styles.buttonText}>{'Animatedmap'}</Text>
      </TouchableOpacity>
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => this.state._onPressButton('3')} >
        <Text style={styles.buttonText}>{'Square'}</Text>
       </TouchableOpacity>
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => this.state._onPressButton('4')} >
        <Text style={styles.buttonText}>{'List'}</Text>
       </TouchableOpacity>
        </View>
         
        <View style={styles.alternativeLayoutButtonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => this.state._onPressButton('5')} >
        <Text style={styles.buttonText}>{'Slider'}</Text>
       </TouchableOpacity>
        </View>

        <View style={styles.alternativeLayoutButtonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => this.state._onPressButton('6')} >
        <Text style={styles.buttonText}>{'AnimatedNav'}</Text>
       </TouchableOpacity>
        </View>

        <View style={styles.alternativeLayoutButtonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => this.state._onPressButton('7')} >
        <Text style={styles.buttonText}>{'NativeMap'}</Text>
       </TouchableOpacity>
        </View>

        <View style={styles.alternativeLayoutButtonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => this.state._onPressButton('8')} >
        <Text style={styles.buttonText}>{'Dashboard'}</Text>
       </TouchableOpacity>
        </View>

        <View style={styles.alternativeLayoutButtonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => this.state._onPressButton('9')} >
        <Text style={styles.buttonText}>{'FoodDashboard'}</Text>
       </TouchableOpacity>
        </View>

        <View style={styles.alternativeLayoutButtonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => this.state._onPressButton('10')} >
        <Text style={styles.buttonText}>{'CurrentLocation'}</Text>
       </TouchableOpacity>
        </View>
        
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1, 
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 40,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    width:300,
    backgroundColor:'#841584',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  }
});
