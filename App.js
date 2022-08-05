import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from './src/routes/app.routes';

import { useFonts, Lexend_300Light } from '@expo-google-fonts/lexend';
import { Roboto_400Regular, Roboto_500Medium, Roboto_300Light} from "@expo-google-fonts/roboto";
import { Jura_400Regular } from '@expo-google-fonts/jura';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Lexend_300Light,
    Roboto_400Regular, Roboto_500Medium, Roboto_300Light,
    Jura_400Regular,
    'agency_fb':require('./assets/fonts/agency_fb.ttf')
  })
  
  if (!fontsLoaded){
    return <AppLoading />
  }
  
  return (
    <View style={{flex:1, backgroundColor: 'rgba(52, 52, 52, alpha)'}}>
     
      <NavigationContainer>
        <AppRoutes/>
      </NavigationContainer>
      
      <StatusBar style='auto'/>
    </View>

  );
}


