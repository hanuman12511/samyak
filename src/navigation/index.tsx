import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screen/HomeScreen';
import React from 'react'
import LoginScreen from '../screen/LoginScreen';
import { navigationconst } from './navigationconst';
import RegisterScreen from '../screen/RegisterScreen';
import PinHomeScreen from '../screen/PinHomeScreen';
const Stack = createStackNavigator();

function StackNav() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name={navigationconst.login} component={LoginScreen} />
      <Stack.Screen name={navigationconst.register} component={RegisterScreen} />
      <Stack.Screen name={navigationconst.pinhome} component={PinHomeScreen} />
      <Stack.Screen name={navigationconst.home} component={HomeScreen} />
      
    </Stack.Navigator>
  );
}
export default StackNav