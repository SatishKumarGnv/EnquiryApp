import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
 
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
import CustomAppDashboard from "../assets/CustomApp"; 
import Drawer from "../components/Drawer"; 


export default class Routes extends React.Component {
	render() {
		return(
			<Router>
			    <Stack key="root" hideNavBar={true}>
			      <Scene key="login" component={Login} title="Login" initial={true}/>
                  <Scene key="header" component={Header} title="Header"/>
				  <Scene key="dashboard" component={Dashboard} title="Dashboard"/>
				  <Scene key="menudashboard" component={MenuDashboard} title="MenuDashboard"/>
				  <Scene key="article" component={Article} title="Article"/>
				  <Scene key="animatedNav" component={AnimatedNav} title="AnimatedNav"/>
				  <Scene key="animatedmap" component={Animatedmap} title="Animatedmap"/>
				  <Scene key="clusternativemarkers" component={Clusternativemarkers} title="Clusternativemarkers"/>
				  <Scene key="nmap" component={Nmap} title="Nmap"/>
				  <Scene key="list" component={List} title="List"/>
				  <Scene key="slider" component={Slider} title="Slider"/>
				  <Scene key="square" component={Square} title="Square"/>
				  <Scene key="foodDashboard" component={FoodDashboard} title="FoodDashboard"/>
				  <Scene key="currentlocation" component={CurrentLocation} title="CurrentLocation"/>
				  <Scene key="custommenudashboard" component={CustomMenuDashboard} title="CustomMenuDashboard"/>
				  <Scene key="customappdashboard" component={CustomAppDashboard} title="CustomAppDashboard"/>
				  <Scene key="drawer" component={Drawer} title="Drawer"/>
				  		  
			    </Stack>
			 </Router>
			)
	}
}