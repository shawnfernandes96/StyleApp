// GrayScreen.js

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const FirstSubScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        First Sub Screen
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c91414',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#fff',
  },
});

export default FirstSubScreen;