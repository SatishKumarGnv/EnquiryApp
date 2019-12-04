 
import {
//   createDrawerNavigator,
//   createStackNavigator,
  createAppContainer
} from 'react-navigation';
import { createDrawerNavigator,DrawerActions } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../components/Login'; 
import MenuDashboard from '../components/MenuDashboard'; 
import CurrentLocation from "../components/CurrentLocation"; 
import Drawer from '../components/Drawer'

const AppNavigator = createStackNavigator(
    {
    //All the screen from the Screen1 will be indexed here
    Login :Login,
    Drawer:Drawer   
  },
  {
      initialRouteName: "Login",
      headerMode:'none'
  }
  );

  export default createAppContainer(AppNavigator);