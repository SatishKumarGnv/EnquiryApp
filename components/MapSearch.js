import React, { Component } from 'react';
// import {MapView as MapViewNative} from 'react-native-map-clustering';
import MapView  from 'react-native-maps';
import { Marker,ProviderPropType, 
  AnimatedRegion } from 'react-native-maps';

import { StyleSheet,
    View,
    Text,
    Dimensions,ScrollView,
    Animated,
    TouchableOpacity,Picker,
    Platform,Image  } from 'react-native';

import SearchableDropdown from 'react-native-searchable-dropdown';
import ImageMarker from '../assets/car.png' 
import AgentImage from '../assets/Agent.png' 
import DistributorImage from '../assets/Distributor.png' 
import ProfileImage from '../assets/Profile.jpg' 
import PlusImage from '../assets/plus.png' 
import MinusImage from '../assets/minus.png' 
import {parkingslots} from '../assets/parking';
import {DistributorList} from '../assets/Distributor';

const screen = Dimensions.get('window');

const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const parkingsSpots =  parkingslots; 
const DistributorLists =  DistributorList; 
const radius = 1000;
  
//Item array for the dropdown
var items = [
  //name key is must.It is to show the text in front
  { id: 0, name: '--Select--' },
  { id: 1, name: 'Agent' },
  { id: 2, name: 'Distributor' } 
];
export default class MapSearch extends Component {
  constructor(props) {
    super(props);
    this.OpenMap= this.OpenMap.bind(this);
    this.onRegionChange = this.onRegionChange.bind(this);
    this.onPressZoomIn = this.onPressZoomIn.bind(this);
    this.onPressZoomOut = this.onPressZoomOut.bind(this);
    this.onPickerChange = this.onPickerChange.bind(this);
    this.onLayout =this.onLayout.bind(this);
    this.state = {
      serverData: [],
      isDataAvailble:true,
      latitude: LATITUDE,
      longitude: LONGITUDE,
      Pickerselectedvalue:'',
      Pickerselectedindex:0,
      coordinate:  {
        latitude: Number(0),
        longitude: Number(0), 
        latitudeDelta:LATITUDE_DELTA,
        longitudeDelta:LONGITUDE_DELTA
      },
      LATLNG: {
        latitude: Number(0),
        longitude: Number(0)
    },
      smarkers:[],
      smarkerimage:''
      //Data Source for the SearchableDropdown
    };
  }
  componentDidMount() {
    // fetch('https://aboutreact.000webhostapp.com/demo/webservice/demosearchables.php')
    //   .then(response => response.json())
    //   .then(responseJson => {
    //     //Successful response from the API Call
    //     this.setState({
    //       serverData: [...this.state.serverData, ...responseJson.results],
    //       //adding the new data in Data Source of the SearchableDropdown
    //     });
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
    navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("wokeeey");
          console.log(position);
          this.setState({
            latitude: Number(position.coords.latitude),
            longitude: Number(position.coords.longitude),
            error: null,
            LATLNG: {
              latitude: Number(position.coords.latitude),
              longitude: Number(position.coords.longitude)
          },
            coordinate: {
             latitude: Number(position.coords.latitude),
             longitude: Number(position.coords.longitude),
             latitudeDelta: LATITUDE_DELTA,
             longitudeDelta: LONGITUDE_DELTA
            }
          }),
          this.map.animateToRegion(
            {
              latitude: Number(this.state.coordinate.latitude),
              longitude: Number(this.state.coordinate.longitude),
              latitudeDelta: (this.state.coordinate.latitudeDelta),
              longitudeDelta: (this.state.coordinate.longitudeDelta),
            }, 2000);
        },
        (error) => this.setState({ error: error.message }),
        { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
      );

  }
  
  onLayout = () => { 
    setTimeout( () => { 
      this.map.fitToCoordinates([{ latitude: this.state.coordinate.latitude, longitude: this.state.coordinate.longitude }, { latitude: this.state.coordinate.latitude, longitude: this.state.coordinate.longitude }], { edgePadding: { top: 10, right: 10, bottom: 10, left: 10 }, animated: true, }); 
    }, 2000 );
   }



  animateToZoom(coordinate) {
    let newRegion = {
        latitude: Number(coordinate.latitude),
        longitude: Number(coordinate.longitude),
        latitudeDelta: LATITUDE_DELTA * Number(radius/15),
        longitudeDelta: LONGITUDE_DELTA * Number(radius/15),
    };
    // this.map.root.animateToRegion(newRegion, 1000);
    this.map.animateToRegion({ latitude: Number(coordinate.latitude), longitude: Number(coordinate.longitude), latitudeDelta: LATITUDE_DELTA * Number(radius/15), longitudeDelta: LONGITUDE_DELTA * Number(radius/15) }, 2000); 
    // this._mapView._root.animateToRegion(newRegion, 1000);
  }

  OpenMap(item) {
    alert(JSON.stringify(item)); 
    this.setState({
        isDataAvailble:true
    })
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  onPressZoomIn() { 
    region = {
        latitude:       this.state.coordinate.latitude,
        longitude:      this.state.coordinate.longitude,
        ltDelta:        this.state.coordinate.latitudeDelta * 10,
        lgDelta:        this.state.coordinate.longitudeDelta * 10
        }
    this.setState={
      coordinate: {
        latitude: Number(region.latitude),
        longitude: Number(region.longitude),
        latitudeDelta: region.ltDelta,
        longitudeDelta: region.lgDelta
       } 
    }
    this.map.animateToRegion(region, 100);
}

onPressZoomOut() {
  region = {
    latitude:       this.state.coordinate.latitude,
    longitude:      this.state.coordinate.longitude,
    ltDelta:        this.state.coordinate.latitudeDelta / 10,
    lgDelta:        this.state.coordinate.longitudeDelta / 10
    } 
    this.setState={
      coordinate: {
        latitude: Number(region.latitude),
        longitude: Number(region.longitude),
        latitudeDelta: region.ltDelta,
        longitudeDelta: region.lgDelta
       } 
    }
    this.map.animateToRegion(region, 100);
    console.log('lt : ' + region.ltDelta + ' lg : ' + region.lgDelta)
}

  onPickerChange(itemValue){
    this.setState({Pickerselectedvalue: itemValue, Pickerselectedindex: itemValue});
    if(itemValue == 2)
    {this.setState({smarkers: DistributorLists,smarkerimage:DistributorImage});}
    else if(itemValue == 1)
    {this.setState({smarkers: parkingsSpots,smarkerimage:AgentImage});}
    else
    {this.setState({smarkers: []});}
     
      this.map.fitToCoordinates([{ latitude: this.state.coordinate.latitude, longitude: this.state.coordinate.longitude }, { latitude: this.state.coordinate.latitude, longitude: this.state.coordinate.longitude }], { edgePadding: { top: 10, right: 10, bottom: 10, left: 10 }, animated: true, }); 
     

  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      smarkers: nextProps.markers
    })
}

  render() {
    return (

      <View style={styles.container}>
      
      <MapView style={styles.map}
      ref={ map => { this.map = map }}
      region={this.state.coordinate} 
      initialRegion={this.state.coordinate}
      loadingEnabled 
      loadingIndicatorColor={'#1c313a'}
      loadingBackgroundColor={'#FFFFFF'}
      moveOnMarkerPress={true}
      showsUserLocation={true}  
      followsUserLocation={true}
      showsMyLocationButton={true}
      zoomEnabled={true}
      onLayout={this.onLayout}
      zoomControlEnabled={true}
      showsScale={true}
      minZoomLevel={10}
      maxZoomLevel={18}
      >
      {this.state.smarkers.map(smarker => (
        <Marker
          key={`marker-${smarker.id}`}
          coordinate={smarker.coordinate}
          cluster={true}
        > 
        <Image style={styles.ImageStyle}
        source={this.state.smarkerimage}
      /> 
      <MapView.Callout>
                <ScrollView style={styles.viewStyle}>
                <Image style={styles.ProfileImage}
                source={ProfileImage}></Image>
                  <Text >
                    Description:
                  </Text>
                  <Text>
                  {smarker.description}
                  </Text>
                </ScrollView>
              </MapView.Callout>
        </Marker>
      ))}
      <Marker
              coordinate={this.state.LATLNG}
              title={"Your Location"} 
            /> 
       <MapView.Circle 
                center = { this.state.LATLNG }
                radius={radius }
                strokeWidth = { 2 }
                zIndex	={0}
                strokeColor = { '#1a66ff' }
                fillColor = { 'rgba(230,238,255,0.5)' } 
        />  
         
       </MapView>
       
      <View style={styles.inputView}> 
     
          <Picker style={styles.inputSearch}  
                        selectedValue={this.state.Pickerselectedvalue}  
                        onValueChange={(itemValue) =>  
                            
                            this.onPickerChange(itemValue)
                          }  
                    >   
                    {items.map((items, i) => {
                      return <Picker.Item key={i} value={items.id} label={items.name} />
                    })}
                    
                </Picker>
      </View>
  </View> 
    );
  }
}

var styles = StyleSheet.create ({
  container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#F5FCFF',
  },
  map: {
      flex: 1,
  },
  inputView: { 
    ...Platform.select({
      ios: {
          //
      },
      android: {
          //
          backgroundColor: 'rgba(0,0,0,0.4)',
      position: 'absolute', 
      top: 15,
      left: 7, 
      paddingHorizontal: 18, 
      // height:Platform.OS == 'ios'? 50 : 150,
      right: 7,
      borderRadius: 20, borderWidth: 1, overflow: 'hidden'
      },
  }),
      
  },
  input: {
      height: 36,
      padding: 10,
      marginTop: 20,
      marginLeft: 10,
      marginRight: 10,
      fontSize: 18,
      borderWidth: 1,
      borderRadius: 10,
      borderColor: '#48BBEC',
      backgroundColor: 'white',
  },
  inputWrapper: {
    flex: 1,
    backgroundColor: 'transparent',
    position: 'absolute', 
    top: 10,
  },
inputSearch: {

  ...Platform.select({
    ios: {
        //
    },
    android: {
        //
        backgroundColor: 'rgba(0,0,0,0.0)', // 40% opaque
    color: 'white', 
    },
}),
    
},
viewStyle: {
  width: 200,
  height: 250,
  backgroundColor: "#fff",
  padding: 20
},
ImageStyle:{
  height: 35,
  width:35
},
MapImageStyle:{
  height: 15,
  width:15, 
  top:20,
},
ProfileImage:{
  width:50,
  height:50,
  padding:10
}
})
