import React, { useState } from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './components/home';


const AppNavigator = createStackNavigator({
  'Dual Up Down Timer': {screen: Home},
})

const App = createAppContainer(AppNavigator);

export default App;