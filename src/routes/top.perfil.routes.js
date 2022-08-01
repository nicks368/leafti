import React from "react";
import 'react-native-gesture-handler';

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Ajuda from "../screens/profile/screens/ajuda";
import Configuracoes from "../screens/profile/screens/configurations";
import Privacidade from "../screens/profile/screens/privacidade";
import Sobre from "../screens/profile/screens/sobre";

import AppLoading from "expo-app-loading";
import {Roboto_700Bold, Roboto_400Regular, useFonts } from "@expo-google-fonts/roboto";

const Tab = createMaterialTopTabNavigator();

export default function TopPerfilNavigator(){
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
            <Tab.Screen name="configurações" component={Configuracoes}/>
            <Tab.Screen name="privacidade" component={Privacidade} />
            <Tab.Screen name="ajuda" component={Ajuda} />
            <Tab.Screen name="sobre" component={Sobre} />
        </Tab.Navigator>
    );
}