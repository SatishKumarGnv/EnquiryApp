//This is an example code for Navigation Drawer with Custom Side bar//
import React, { Component } from 'react';
import { View, StyleSheet, Image, Alert,Text,TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import Login from '../components/Login';   
 
export default class CustomSidebarMenu extends Component {
  constructor() {
    super();
    this.Logout= this.Logout.bind(this);
    //Setting up the Main Top Large Image of the Custom Sidebar
    this.proileImage =
      'https://appjs.co/wp-content/uploads/2015/09/brent3-458x458.png';
    //Array of the sidebar navigation option with icon and screen to navigate
    //This screens can be any screen defined in Drawer Navigator in App.js
    //You can find the Icons from here https://material.io/tools/icons/
    this.items = [
      {
        navOptionThumb: 'home',
        navOptionName: 'Home',
        screenToNavigate: 'FoodDashboard',
      },
      {
        navOptionThumb: 'info',
        navOptionName: 'AboutUs',
        screenToNavigate: 'AboutUs',
      },
      {
        navOptionThumb: 'input',
        navOptionName: 'ContactUs',
        screenToNavigate: 'ContactUs',
      },
      {
        navOptionThumb: 'help',
        navOptionName: 'FAQ',
        screenToNavigate: 'FAQ',
      },
      {
        navOptionThumb: 'navigation',
        navOptionName: 'ClusterSearch',
        screenToNavigate: 'ClusterSearch',
      },
      {
        navOptionThumb: 'build',
        navOptionName: 'Logout',
        screenToNavigate: 'Logout',
      },
    ];
  }
  Logout = ()=>{ 
    let oHome = new Login(); 
    oHome.onLogout();
    this.props.navigation.navigate('Login'); 
  } 
  logoutAlert = () => {
    Alert.alert(
      'Confirm',
      'Are you sure that you want to logout?',
      [
        {text: 'Yes', onPress: this.Logout},
        {text: 'NO', onPress: () => console.warn('NO Pressed'), style: 'cancel'},
      ]
    );
  }
  render() {
    return (
      <View style={styles.sideMenuContainer}>
        {/*Top Large Image */}
        <Image
        // source={require('../assets/userprofile.png')}
        source={{uri: this.proileImage}}
          style={styles.sideMenuProfileIcon}
        />
        {/*Divider between Top Image and Sidebar Option*/}
        <View
          style={{
            width: '100%',
            height: 1,
            backgroundColor: '#e2e2e2',
            marginTop: 15,
          }}
        />
        {/*Setting up Navigation Options from option array using loop*/}
        <View style={{ width: '100%' }}>
          {this.items.map((item, key) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: global.currentScreenIndex === key ? '#e0dbdb' : '#ffffff',
              }}
              key={key}  >
              <View style={{ marginRight: 10, marginLeft: 20 }}>
                <Icon name={item.navOptionThumb} size={25} color="#808080" />
              </View>
              {item.screenToNavigate == 'Logout'?
              <TouchableOpacity onPress={this.logoutAlert}>
              <Text
                style={{
                  fontSize: 15,
                  color: global.currentScreenIndex === key ? 'red' : 'black',
                }}
                
               >
                {item.navOptionName}
              </Text>
              </TouchableOpacity>
              :
              <TouchableOpacity onPress={() => {
                global.currentScreenIndex = key;
                this.props.navigation.navigate(item.screenToNavigate);
              }}>
              <Text
                style={{
                  fontSize: 15,
                  color: global.currentScreenIndex === key ? 'red' : 'black',
                }}
                
               >
                {item.navOptionName}
              </Text>
              </TouchableOpacity>
              }
            </View>
          ))}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    // paddingTop: 20, 
    marginTop:20
  },
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 180,
    height: 180,
    marginTop: 20,
    borderRadius: 180 / 2,
  },
});