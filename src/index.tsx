import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNav from './navigation';
import { SafeAreaView,Text } from 'react-native';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import HomeScreen from './screen/HomeScreen';
import ToastScreen from './utils/ToastScreen';
import { batchshow } from './data/data';
import {Context} from './utils/Context'
export default function App() {
  return (
    <SafeAreaView style={{backgroundColor:'red',flex:1}}>
      <Context.Provider value={batchshow}>
        <NavigationContainer
          onReady={() => {
           
            SplashScreen.hide();
        }}>
        
      <ToastScreen/>
       <StackNav/>
       </NavigationContainer>
       </Context.Provider>
    </SafeAreaView>
  );
}