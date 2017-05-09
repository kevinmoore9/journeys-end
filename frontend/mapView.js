import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Map from 'react-native-maps';


class MapView extends Component {
  constructor() {
    super();
    this.state = {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };
    this.onRegionChange = this.onRegionChange.bind(this);

  }

  // watchID: ?number = null;


  // componentDidMount() {
  //   navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       var initialPosition = JSON.stringify(position);
  //       this.setState({initialPosition});
  //     },
  //     (error) => alert(JSON.stringify(error)),
  //     {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
  //   );
  //   this.watchID = navigator.geolocation.watchPosition((position) => {
  //     var lastPosition = JSON.stringify(position);
  //     this.setState({lastPosition});
  //   });
  // }
  //
  // componentWillUnmount() {
  //   navigator.geolocation.clearWatch(this.watchID);
  // }

  onRegionChange(region) {
    this.setState({ region });
    console.log(region);
  }

  render() {
      return (
        <Map style={styles.map}
          region={this.state.region}
          onRegionChange={this.onRegionChange}
          showsUserLocation={true}
          followsUserLocation={true}
          />
      );
  }
}
//
// <View style={styles.container}>
//   <Text>
//     <Text style={styles.title}>Initial position: </Text>
//     {this.state.initialPosition}
//   </Text>
//   <Text>
//     <Text style={styles.title}>Current position: </Text>
//     {this.state.lastPosition}
//   </Text>
// </View>

const styles = StyleSheet.create({
  map: {
    top: 0, left: 0, right: 0, bottom: 0, position: 'absolute'
  },

});

module.exports = MapView;
