import React, { Component } from "react";
import { Alert, AppRegistry, StyleSheet, Dimensions, View } from "react-native";
import { TabNavigator } from "react-navigation";
import { Container, Text } from "native-base";
import MapView from 'react-native-maps';


class CurrentLocation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error:null,
      region:{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            }
    }; 
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
       (position) => {
         console.log("wokeeey");
         console.log(position);
         this.setState({
           latitude: position.coords.latitude,
           longitude: position.coords.longitude,
           error: null,
           region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 5,
            longitudeDelta: 5
           }
         });
       },
       (error) => this.setState({ error: error.message }),
       { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
     );
   }
   goToInitialLocation(coordinate) {
    let initialRegion = Object.assign({}, this.state.region);
    initialRegion["latitudeDelta"] = 0.005;
    initialRegion["longitudeDelta"] = 0.005;
    let newRegion = {
        latitude: this.state.region.latitude,
        longitude: this.state.region.longitude,
        latitudeDelta: 0.005 ,
        longitudeDelta: 0.005,
    };
    // Alert.alert(newRegion);sdfsdfsd
    this.mapView.animateToRegion(newRegion, 1000);
    // this.mapView.animateToRegion(initialRegion, 1000);
  }


  render() {
    return (
        <MapView style={styles.map} 
        region= {this.state.region}
            ref={ref => (this.mapView = ref)}
            animationEnabled={true}
           zoomEnabled={true} showsUserLocation={true} followUserLocation={true} 
           onMapReady={this.goToInitialLocation.bind(this)}
           clusteringEnabled={true}
           onClusterPress={(coordinate)=>{
            this.goToInitialLocation(coordinate);
        }}
           >
       
           {!!this.state.latitude && !!this.state.longitude && <MapView.Marker
              coordinate={{"latitude":this.state.latitude,"longitude":this.state.longitude}}
              title={"Your Location"}
            />}
     
           </MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 40,
    left: 50,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default CurrentLocation;