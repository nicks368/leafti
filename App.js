import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from './src/routes/app.routes';
import Header from './src/components/header';

export default function App() {
  return (
    <View style={{flex:1, backgroundColor: 'white'}}>
      <Header/>

      <NavigationContainer>
        <AppRoutes/>
      </NavigationContainer>
      
      <StatusBar style='auto'/>
    </View>

  );
}


