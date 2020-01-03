import * as React from 'react';
import { Text, View, StyleSheet,ScrollView,Dimensions } from 'react-native';
import Constants from 'expo-constants'; 
// You can import from local files 
import Header from '../components/Header'; 
import Slider from '../components/slider';  

const screen  = Dimensions.get('window');
 export default class FoodDashboard extends React.Component {
  render() {
    return ( 
      // <ScrollView style={styles.Scrollcontainer}
      //   horizontal={false} 
      //   showsHorizontalScrollIndicator={false}
      //   showsVerticalScrollIndicator={true} >   
      // <ScrollView contentContainerStyle={styles.Scrollcontainer}>  
      <View style={styles.container}> 
        <Slider/>
      <Header/>  
        </View>
      // </ScrollView> 
    );
  } 
}

 
const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10, 
    margin: 1, 
    height:screen.height,
    borderWidth: 0.5,
    maxHeight:1000,
    backgroundColor: '#54AFDD', 
    bottom:0, 
     
  },
  Scrollcontainer:{ 
    flexGrow: 0.05,
    maxHeight:screen.height
  }
}); 