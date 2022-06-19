
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar';

import Login from './src/views/Login'
import Homepage from './src/views/Homepage';
import Signup from './src/views/Signup';
import Menu from './src/views/Menu';
import Telesurveillance from './src/views/Telesurveillance';
import Actionurgence from './src/views/ActionUrgence';
import Outilsconnectes from './src/views/OutilsConnectes';


const Stack = createNativeStackNavigator();


const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Homepage' component={Homepage} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Signup' component={Signup} />
        <Stack.Screen name='Menu' component={Menu} />
        <Stack.Screen name='Télésurveillance' component={Telesurveillance} />
        <Stack.Screen name='Action urgence' component={Actionurgence} />
        <Stack.Screen name='Outils connectés' component={Outilsconnectes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App




