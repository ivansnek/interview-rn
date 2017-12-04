import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking
} from 'react-native';

export default class App extends Component {
  render() {
    const { container, instructions, buttonStyle, fontStyle } = styles;
    const url = 'https://www.last.fm/api/show/chart.getTopArtists';
    return (
      <View style={container}>
        <View>
          <Text style={fontStyle}>I should display a Top Astist List from</Text>
          <TouchableOpacity
            style={buttonStyle}
            onPress={() => Linking.openURL(url)}
            >
            <Text style={fontStyle}>API URL</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  fontStyle: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  buttonStyle: {
    height: 30,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  },
});