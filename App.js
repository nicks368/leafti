import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from './src/routes/app.routes';

export default function App() {
  return (
    <View style={{flex:1, backgroundColor: 'rgba(52, 52, 52, alpha)'}}>
     
      <NavigationContainer>
        <AppRoutes/>
      </NavigationContainer>
      
      <StatusBar style='auto'/>
    </View>

  );
}


