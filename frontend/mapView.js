import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class MapView extends Component {
  constructor() {
    super();
    this.state = {
      initialPosition: 'unknown',
      lastPosition: 'unknown',
    };

  }

watchID: ?number = null;


componentDidMount() {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      var initialPosition = JSON.stringify(position);
      this.setState({initialPosition});
    },
    (error) => alert(JSON.stringify(error)),
    {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
  );
  this.watchID = navigator.geolocation.watchPosition((position) => {
    var lastPosition = JSON.stringify(position);
    this.setState({lastPosition});
  });
}

componentWillUnmount() {
  navigator.geolocation.clearWatch(this.watchID);
}

  render() {

    return (
      <View style={styles.container}>
        <Text>
          <Text style={styles.title}>Initial position: </Text>
          {this.state.initialPosition}
        </Text>
        <Text>
          <Text style={styles.title}>Current position: </Text>
          {this.state.lastPosition}
        </Text>
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
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = MapView;
