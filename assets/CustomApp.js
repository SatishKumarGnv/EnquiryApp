//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { View, Image,Alert, Platform,TouchableOpacity,TouchableWithoutFeedback, TouchableNativeFeedback,TouchableHighlight,StyleSheet, Modal,Text, Button, Dimensions } from 'react-native';
 
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack'; 
import { Icon } from "react-native-elements";
import Login from '../components/Login';  
import Register from '../components/Register';
import AboutUs from '../components/AboutUs'; 
import ContactUs from '../components/ContactUs'; 
import CurrentLoc from '../components/CurrentLocation'; 
// import ClusterSearch from '../components/ClusterSearch';
import ClusterSearch from '../components/MapSearch'; 
// import FAQ from '../components/Faq'; 
import FAQ from '../components/FaqNew'; 
import FoodDashboard from "../components/FoodDashboard";  
import CustomSideMenu from "../components/CustomSideMenu";  
 const screenwidth = Dimensions.get('window').width;
 const screenheight = Dimensions.get('window').height;
 let HeaderRightBind= ''; 
 const headerstyleconst = {
                            backgroundColor: '#FFFFFF',
                            height:23,   
                            textAlign: 'center', 
                            marginTop:Platform.OS == 'android'? 0 :14 
                          };
 
                          
class NavigationDrawerStructure extends Component {

    constructor(props) {
        super(props); 
        this.toggleDrawer= this.toggleDrawer.bind(this);
        this.Logout= this.Logout.bind(this);
        this.OpenModal= this.OpenModal.bind(this);
        this.state = {
          isModalVisible:false,
          isLogin:false,
        };
      }
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };

  Logout = () => { 
    this.setState({ isModalVisible: false }); 
    let oHome = new Login(); 
    oHome.onLogout();
    this.props.navigationProps.navigate('Login'); 
  };

  OpenModal = () => {
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
    const stat = this.props.onLogout;
    return (
      <View style={{flex: 1,width: 50, height: 50}}>
      <View style={styles.MenuLeft}>
      <View>     
         <TouchableHighlight  onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={require('../assets/drawer.png')} accessibilityLabel = 'Menu'
            style={{ width: 25, height: 25, marginLeft: 5,marginTop:10 }}
          />
        </TouchableHighlight>
       </View>
        
      </View>
      </View>
    );
  }
}
const headertitlestyl = (
  <View  style={{flex:1, flexDirection:'row', justifyContent:'center'}}>
    <Image
    source={require('../assets/placeholder3.png')} 
        style={{width:25, height:23,bottom:5}}
    />
   </View>
);
   HeaderRightBind = (
    <TouchableWithoutFeedback onPress={() => 
      {    
       Alert.alert(
         'Do you want to Logout!',
         'Alert Message',
         [
           {text: 'Yes', onPress: () => {  
             let oHome = new Login(); 
             oHome.onLogout();
                navigation.navigate('Login')
               }},
           {text: 'No', onPress: () => console.log('Cancel Pressed!')},
         ],
         { cancelable: false }
       ) 
     }
      }
         > 
         <Image
         source={require('../assets/logout.png')}
         style={{ width: 25, height: 25 ,marginTop:10 }}
       />
     </TouchableWithoutFeedback>
);
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

const FirstActivity_StackNavigator_Register = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  Register: {
    screen: Register,
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
    headerMode: 'float',
    navigationOptions: ({ navigation }) => ({
      
      title: 'FoodDashboard',
      headerMode: 'float',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerRight: (
        <View style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: 20,
          marginRight:4
        }}>
        <TouchableWithoutFeedback  onPress={() => 
        {    
         Alert.alert(
           'Do you want to Logout!',
           'Alert Message',
           [
             {text: 'Yes', onPress: () => {  
               let oHome = new Login(); 
               oHome.onLogout();
                  navigation.navigate('Login')
                 }},
             {text: 'No', onPress: () => console.log('Cancel Pressed!')},
           ],
           { cancelable: false }
         ) 
       }
        }
           > 
           <Image
           source={require('../assets/logout.png')}
           style={styles.Logoalin}
         />
       </TouchableWithoutFeedback>
       <TouchableHighlight  
           > 
           <Image
           source={require('../assets/Notification.png')}
           style={styles.Notifications}
         />
       </TouchableHighlight>
       </View>
       ),
      headerStyle: headerstyleconst,
      headerTintColor: '#000000', 
      headerTitle: headertitlestyl,
      headerTitleStyle: {
        fontWeight: 'bold'
      },
    }),
  },
});
 
const Screen3_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Third: {
    screen: AboutUs,
    headerMode: 'float',
    navigationOptions: ({ navigation }) => ({
      title: 'About Us',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerRight: (
        <View style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: 20,
          marginRight:4
        }}>
        <TouchableWithoutFeedback  onPress={() => 
        {    
         Alert.alert(
           'Do you want to Logout!',
           'Alert Message',
           [
             {text: 'Yes', onPress: () => {  
               let oHome = new Login(); 
               oHome.onLogout();
                  navigation.navigate('Login')
                 }},
             {text: 'No', onPress: () => console.log('Cancel Pressed!')},
           ],
           { cancelable: false }
         ) 
       }
        }
           > 
           <Image
           source={require('../assets/logout.png')}
           style={styles.Logoalin}
         />
       </TouchableWithoutFeedback>
       <TouchableHighlight  
           > 
           <Image
           source={require('../assets/Notification.png')}
           style={styles.Notifications}
         />
       </TouchableHighlight>
       </View>
       ),
      headerStyle: headerstyleconst,
      headerTintColor: '#000000', 
      headerTitle: headertitlestyl,
    }),
  },
});

const Screen4_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Four: {
    screen: ContactUs,
    navigationOptions: ({ navigation }) => ({
      title: 'Contact Us',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerRight:(
        <View style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: 20,
          marginRight:4
        }}>
        <TouchableWithoutFeedback  onPress={() => 
        {    
         Alert.alert(
           'Do you want to Logout!',
           'Alert Message',
           [
             {text: 'Yes', onPress: () => {  
               let oHome = new Login(); 
               oHome.onLogout();
                  navigation.navigate('Login')
                 }},
             {text: 'No', onPress: () => console.log('Cancel Pressed!')},
           ],
           { cancelable: false }
         ) 
       }
        }
           > 
           <Image
           source={require('../assets/logout.png')}
           style={styles.Logoalin}
         />
       </TouchableWithoutFeedback>
       <TouchableHighlight  
           > 
           <Image
           source={require('../assets/Notification.png')}
           style={styles.Notifications}
         />
       </TouchableHighlight>
       </View>
       ),
      headerStyle: headerstyleconst,
      headerTintColor: '#000000', 
      headerTitle: headertitlestyl,
    }),
  },
});

const Screen5_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Five: {
    screen: FAQ,
    navigationOptions: ({ navigation }) => ({
      title: 'FAQ',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerRight:(
        <View style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: 20,
          marginRight:4
        }}>
        <TouchableWithoutFeedback  onPress={() => 
        {    
         Alert.alert(
           'Do you want to Logout!',
           'Alert Message',
           [
             {text: 'Yes', onPress: () => {  
               let oHome = new Login(); 
               oHome.onLogout();
                  navigation.navigate('Login')
                 }},
             {text: 'No', onPress: () => console.log('Cancel Pressed!')},
           ],
           { cancelable: false }
         ) 
       }
        }
           > 
           <Image
           source={require('../assets/logout.png')}
           style={styles.Logoalin}
         />
       </TouchableWithoutFeedback>
       <TouchableHighlight  
           > 
           <Image
           source={require('../assets/Notification.png')}
           style={styles.Notifications}
         />
       </TouchableHighlight>
       </View>
       ),
      headerStyle: headerstyleconst,
      headerTintColor: '#000000', 
      headerTitle: headertitlestyl,
    }),
  },
});

const Screen6_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Six: {
    screen: ClusterSearch,
    navigationOptions: ({ navigation }) => ({
      title: 'ClusterSearch',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerRight:(
        <View style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: 20,
          marginRight:4
        }}>
        <TouchableWithoutFeedback  onPress={() => 
        {    
         Alert.alert(
           'Do you want to Logout!',
           'Alert Message',
           [
             {text: 'Yes', onPress: () => {  
               let oHome = new Login(); 
               oHome.onLogout();
                  navigation.navigate('Login')
                 }},
             {text: 'No', onPress: () => console.log('Cancel Pressed!')},
           ],
           { cancelable: false }
         ) 
       }
        }
           > 
           <Image
           source={require('../assets/logout.png')}
           style={styles.Logoalin}
         />
       </TouchableWithoutFeedback>
       <TouchableHighlight  
           > 
           <Image
           source={require('../assets/Notification.png')}
           style={styles.Notifications}
         />
       </TouchableHighlight>
       </View>
       ),
      headerStyle: headerstyleconst,
      headerTintColor: '#000000', 
      headerTitle: headertitlestyl,
    }),
  },
});

const Screen7_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Seven: {
    screen: FAQ,
    navigationOptions: ({ navigation }) => ({
      title: 'Menu Links',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: (
        <View style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: 20,
          marginRight:4
        }}>
        <TouchableWithoutFeedback  onPress={() => 
        {    
         Alert.alert(
           'Do you want to Logout!',
           'Alert Message',
           [
             {text: 'Yes', onPress: () => {  
               let oHome = new Login(); 
               oHome.onLogout();
                  navigation.navigate('Login')
                 }},
             {text: 'No', onPress: () => console.log('Cancel Pressed!')},
           ],
           { cancelable: false }
         ) 
       }
        }
           > 
           <Image
           source={require('../assets/logout.png')}
           style={styles.Logoalin}
         />
       </TouchableWithoutFeedback>
       <TouchableHighlight  
           > 
           <Image
           source={require('../assets/Notification.png')}
           style={styles.Notifications}
         />
       </TouchableHighlight>
       </View>
       ),
       headerTintColor: '#000000', 
       headerTitle: headertitlestyl,
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
  Register: {
    //Title
    screen: FirstActivity_StackNavigator_Register,
    navigationOptions: {
    //   drawerLabel: 'Login',
    drawerLabel: () => null
    //   header:null
    },
  },
  FoodDashboard: {
    //Title
    screen: Screen2_StackNavigator,
    headerMode: 'float',
    navigationOptions: {
      drawerLabel: 'Dashboard',
      headerStyle: {marginBottom:30}
    },
  },
  AboutUs: {
    //Title
    screen: Screen3_StackNavigator,
    headerMode: 'float',
    navigationOptions: {
      drawerLabel: 'About Us',
    },
  },
  ContactUs: {
    //Title
    screen: Screen4_StackNavigator,
    headerMode: 'float',
    navigationOptions: {
      drawerLabel: 'Contact Us',
    },
  },
  FAQ: {
    //Title
    screen: Screen5_StackNavigator,
    navigationOptions: {
      drawerLabel: 'FAQ',
    },
  },
  ClusterSearch: {
    //Title
    screen: Screen6_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Current Location',
    },
  },
  Logout: {
    //Title
    screen: Screen7_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Logout',
    },
  },
  Loggout: {
    //Title
    screen: Screen3_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Loggout',
    },
  },
},
{
    initialRouteName: "Login",
    header:null,
     contentComponent: CustomSideMenu 
}
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', 
    marginTop:30
  },
   modal: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#00ff00',
      padding: 10, 
      marginTop:screenwidth/2,
      marginBottom:screenheight/2,
      marginLeft:25,
      marginRight:25
   },
   text: {
      color: '#3f2949',
      marginTop: 10
   },
   LogoutRight:{ 
   },
   MenuLeft:{ 
   },
   Logoalin:{
    width: 25, 
    height: 25,
    left:5,
    bottom:3
   },
   Notifications:{
    width: 25, 
    height: 25, 
    right:43,
    bottom:3
   }
});
export default createAppContainer(DrawerNavigatorExample);