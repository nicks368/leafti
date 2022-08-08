import React from "react";
import 'react-native-gesture-handler';

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Populares from "../screens/search/screens/populares";
import Categorias from "../screens/search/screens/categorias";
import Familia from "../screens/search/screens/familia";

import AppLoading from "expo-app-loading";
import {Roboto_700Bold, Roboto_400Regular, useFonts } from "@expo-google-fonts/roboto";

const Tab = createMaterialTopTabNavigator();

export default function TopNavigator(){
    const [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_700Bold,
    })
      
    if (!fontsLoaded){
        return <AppLoading />
    }

    return(
        <Tab.Navigator 
            screenOptions={{
                tabBarActiveTintColor: '#1C6119',
                tabBarInactiveTintColor: '#BDBDBD',
                tabBarIndicatorStyle: {
                    backgroundColor: '#1C6119'
                },
                tabBarLabelStyle: {
                    fontSize: 14,
                    fontFamily: 'Roboto_700Bold',
                }, 
                tabBarScrollEnabled: true,
            }}
            >
            <Tab.Screen name="populares" component={Populares}/>
            <Tab.Screen name="categorias" component={Categorias} />
            <Tab.Screen name="família" component={Familia} />
        </Tab.Navigator>
    );
}