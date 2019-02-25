import React, { Component, StyleSheet } from 'react';
import { Router, Scene, Tabs } from 'react-native-router-flux';

import FirstScreen from './components/FirstScreen';
import FirstSubScreen from './components/FirstSubScreen';
import SecondScreen from './components/SecondScreen';
import SecondSubScreen from './components/SecondSubScreen';
import ThirdScreen from './components/ThirdScreen';
import ThirdSubScreen from './components/ThirdSubScreen';

const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene
          key="tabbar"
          tabs={true}
          tabBarStyle={{ backgroundColor: '#FFFFFF' }}
        >
          <Scene key="tab1" title="TAB1">
              <Scene 
                key="screen1"
                component={FirstScreen}
                title="SCREEN 1"
              />
              <Scene
                key="screen1a"
                component={FirstSubScreen}
                title="SUBSCREEN 1"
              />
          </Scene>
          <Scene key="tab2" title="TAB2">
              <Scene 
                key="screen2"
                component={SecondScreen}
                title="SCREEN 2"
              />
              <Scene
                key="screen2a"
                component={SecondSubScreen}
                title="SUBSCREEN 2"
              />
          </Scene>
          <Scene key="tab3" title="TAB3">
              <Scene 
                key="screen3"
                component={ThirdScreen}
                title="SCREEN 3"
              />
              <Scene
                key="screen3a"
                component={ThirdSubScreen}
                title="SUBSCREEN 3"
              />
          </Scene>
        </Scene>
      </Scene>
    </Router>
  );
}

export default App;