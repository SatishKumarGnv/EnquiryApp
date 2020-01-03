import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  Alert,
  ScrollView,
  Dimensions
} from 'react-native';
import Swiper from 'react-native-web-swiper';

const { height } = Dimensions.get('window');

export default class HomeScreen extends React.Component {
  state = {
    screenHeight : 0,
  };

  onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({ screenHeight: contentHeight });
  };
  
  render() {
    const scrollEnabled = this.state.screenHeight >height;
    return (
      <ScrollView
        vertical={true}
        style={styles.contentContainer}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        scrollEnabled={scrollEnabled}
        onContentSizeChange={this.onContentSizeChange}>
        <View style={{ height: 250 }} collapsable={false}>
          <View>
          <Text style={styles.HeaderText}>
         Welcome to EnquiryApp
         </Text>
          </View>
          <Swiper
            style={styles.slide}
            horizontal
            loop
            timeout={-4.5}
            controlsProps={{
              dotActiveStyle: { backgroundColor: 'red' },
            }}>
            <View style={{ alignItems: 'center' }}>
              <Image
                style={styles.ImageText}
                source={require('../images/fab14.jpg')}/>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Image
                style={styles.ImageText}
                source={require('../images/fab12.jpg')}/>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Image
                style={styles.ImageText}
                source={require('../images/fab13.jpg')}/>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Image
                style={styles.ImageText}
                source={require('../images/fab14.jpg')}/>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Image
                style={styles.ImageText}
                source={require('../images/fab15.jpg')}/>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Image
                style={styles.ImageText}
                source={require('../images/fab16.jpg')}/>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Image
                style={styles.ImageText}
                source={require('../images/fab17.jpg')}/>
            </View>
          </Swiper>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  HeaderText : {
    paddingTop: 1,
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },
  ImageText : {
      width: 376,
      height: 190
  }
  
});
