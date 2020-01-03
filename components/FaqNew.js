import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import DropDownItem from 'react-native-drop-down-item';

const IC_ARR_DOWN = require('../assets/ic_arr_down.png');
const IC_ARR_UP = require('../assets/ic_arr_up.png');
 
export default class FaqNew extends Component {
  state = {
    contents: [
      {
        title: 'How can he become an Distributor',
        body: 'Register with Enquiry App',
      },
      {
        title: 'How can he become an Agent',
        body: 'Register with Enquiry App.',
      },
      {
        title: 'How to Contact Commercial Manager',
        body: 'Register with Enquiry App.',
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{ alignSelf: 'stretch' }}>
          {
            this.state.contents
              ? this.state.contents.map((param, i) => {
                return (
                  <DropDownItem
                    key={i}
                    style={styles.dropDownItem}
                    contentVisible={false}
                    invisibleImage={IC_ARR_DOWN}
                    visibleImage={IC_ARR_UP}
                    header={
                      <View style={styles.header}>
                        <Text style={{
                          fontSize: 16,
                          color: 'blue',
                        }}>{param.title}</Text>
                      </View>
                    }
                  >
                    <Text style={[
                      styles.txt,
                      {
                        fontSize: 20,
                      },
                    ]}>
                      {param.body}
                    </Text>
                  </DropDownItem>
                );
              })
              : null
          }
          <View style={{ height: 96 }}/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 60,
  },
  header: {
    width: '100%',
    paddingVertical: 8,
    paddingHorizontal: 12,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTxt: {
    fontSize: 12,
    color: 'rgb(74,74,74)',
    marginRight: 60,
    flexWrap: 'wrap',
  },
  txt: {
    fontSize: 14,
  },
});