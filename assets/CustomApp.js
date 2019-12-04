//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { View, Image, TouchableOpacity } from 'react-native';
// import all basic components
 
//For React Navigation 3+
//import {
//  createStackNavigator,
//  createDrawerNavigator,
//  createAppContainer,
//} from 'react-navigation';
 
//For React Navigation 4+
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import Screen1 from '../components/CurrentLocation';
import Screen2 from '../components/FoodDashboard';
import Screen3 from '../components/react-native-cluster';
import Header from '../components/Header';
import Login from '../components/Login'; 
import Dashboard from '../components/Dashboard'; 
import MenuDashboard from '../components/MenuDashboard'; 
import Article from '../components/Article'; 
import Square from '../components/Square'; 
import List from '../components/List';  
import Slider from '../components/slider'; 
import Nmap from "../components/Nativemap";
import Animatedmap from "../components/Animatedmap";
import AnimatedNav from "../components/AnimatedNav";
import Clusternativemarkers from "../components/react-native-cluster"; 
import FoodDashboard from "../components/FoodDashboard"; 
import CurrentLocation from "../components/CurrentLocation"; 
import CustomMenuDashboard from "../components/CustomMenu"; 
 
class NavigationDrawerStructure extends Component {

    constructor(props) {
        super(props); 
        this.toggleDrawer= this.toggleDrawer.bind(this);
      }
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={require('../assets/drawer.png')}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
 
const FirstActivity_StackNavigator = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  Login: {
    screen: Login,
    navigationOptions: ({ navigation }) => ({
      title: 'Login',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
},
{
    headerMode:"none"
}

);
 
const Screen2_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Second: {
    screen: FoodDashboard,
    navigationOptions: ({ navigation }) => ({
      title: 'FoodDashboard',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});
 
const Screen3_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Third: {
    screen: MenuDashboard,
    navigationOptions: ({ navigation }) => ({
      title: 'Menu Links',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});
 
const DrawerNavigatorExample = createDrawerNavigator(
    {
  //Drawer Optons and indexing
  Login: {
    //Title
    screen: FirstActivity_StackNavigator,
    navigationOptions: {
    //   drawerLabel: 'Login',
    drawerLabel: () => null
    //   header:null
    },
  },
  FoodDashboard: {
    //Title
    screen: Screen2_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Dashboard',
    },
  },
  MenuDashboard: {
    //Title
    screen: Screen3_StackNavigator,
    navigationOptions: {
      drawerLabel: 'MenuDashboard',
    },
  },
},
{
    initialRouteName: "Login",
    header:null
}
);
 
export default createAppContainer(DrawerNavigatorExample);