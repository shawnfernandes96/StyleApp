import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';

const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="Home"
          component={FirstScreen}
          title="Home"
          initial
        />
        <Scene
          key="Second"
          component={SecondScreen}
          title="Second"
        />
      </Scene>
    </Router>
  );
}

export default App;