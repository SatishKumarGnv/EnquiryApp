import React, { Component } from 'react';
import { Alert, Text, Button, TextInput, View, ActivityIndicator,StyleSheet, TouchableOpacity,Image  } from 'react-native';

import {Actions} from 'react-native-router-flux';
import { Header } from 'react-navigation-stack';
import Headers from './Header';
import CustomProgessBar from './CustomProgressBar';

// import Ajax from './assets/wrapper/ajax';
export default class Register extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
      isLogin:false,
      showLoad:false,
      onLogin:this.onLogin.bind(this),  
      onRegister:this.onRegister.bind(this)
    };
  }
  
  onLogin() {
    this.props.navigation.navigate('Login');
  } 

  onRegister() {
    this.showLoader(); 
    const { username, password } = this.state;
    
      var datas = { 
                  Password: `${username}`,
                  UserName: `${password}`,
              };
var dataToSend = { UserName: `${username}`, Password: `${password}` };

    //making data to send on server
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

fetch('http://uaims.apcrda.org/Login/ValidateUser', {
      method: 'POST', //Request Type
      body: formBody, //post body
      headers: {
        //Header Defination
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then(response => response.json())
      //If response is in json then in success
      .then(responseJson => {
        if (responseJson.ReturnCode == 0) {
        Alert.alert('Welcome you are Authorized');    
        // this.dashboard();
        // this.CustomMenuDashboard();
        this.setState({ isLogin: true });
        
        this.props.navigation.navigate('FoodDashboard');
        }
        
        if (responseJson.ReturnCode == 1) {
        Alert.alert('Invalid Credentials');  
        }
        
        if (responseJson.ReturnCode == 2) {
        Alert.alert('Please Contact Admin');  
        }
        // Alert.alert(JSON.stringify(responseJson));
        // alert(JSON.stringify(responseJson));
        console.log(responseJson);
        this.hideLoader();
      })
      //If response is not in json then in error
      .catch(error => {
         Alert.alert(JSON.stringify(error));
        // alert(JSON.stringify(error));
        console.error(error);
      }); 
  }  
  render() {
    return (
      this.state.isLogin ?
      <CustomProgessBar /> :
      <View style={styles.container}>
      <Headers/>
      <View style={styles.SectionStyle}>
      <Image source={require('../assets/username.png')} style={styles.ImageStyle} />
        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Username'}
          style={styles.input}
        />
        </View>
        <View style={styles.SectionStyle}>
        <Image source={require('../assets/key.png')} style={styles.ImageStyle} />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        </View>
       {/*<Button
          title={'Login'}
          style={styles.input}
          onPress={this.state.onLogin} 
       />*/}

        <TouchableOpacity style={styles.button} onPress={this.state.onRegister} >
        <Text style={styles.buttonText}>{'Register'}</Text>
      </TouchableOpacity>
      <View style={styles.AccountView}>
      <Text  
      style={styles.Account}>{'Back to Login !'}</Text>
      <TouchableOpacity style={styles.buttonContainer} onPress={this.state.onLogin} >
      <Text style={styles.buttonText}>{'Login'}</Text>
    </TouchableOpacity>
    </View> 
      { this.state.showLoad && 
        <View style={[
          StyleSheet.absoluteFill,
          {
            backgroundColor: 'rgba(0,0,0,0.0)',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 99,opacity : this.state.showLoad ? 0.8 : 0,
          },
        ]}>
        <ActivityIndicator style = {{ flex:1}}  animating={this.state.showLoad} size="large" color="#1c313a" />
      </View>
      }
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#54AFDD',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 0,
    borderColor: 'black',
    marginBottom: 6,
  },
  Account:{
    color:'#cccfc8', 
    alignSelf:'center', 
    left:0
  },
  AccountView:{
    flexDirection: 'row',
    alignSelf:'center',
  },
  button: {
    width:240,
    height:45,
    backgroundColor:'#1c313a',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  },
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 40,
    borderRadius: 15,
    margin: 10,
  },
  ImageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
});
