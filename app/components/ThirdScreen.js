// app/ScarletScreen.js

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const ThirdScreen = () => {
  return (
    <View style={styles.container}>
      <Text 
        style={styles.welcome}
        onPress={() => Actions.screen3a()} // New Code
      >
        Third Screen
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#131d93',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#000',
    backgroundColor: '#fff',
  },
});

export default ThirdScreen;