import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import Home from '../screens/home/index';
import Search from '../screens/search/index';
import Calendario from '../screens/calendario';
import Dashboard from '../screens/dashboard';
import MeuStack from './stack.routes';

import { Feather, Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'


const Tab = createBottomTabNavigator();

export default function AppRoutes(){
    return (
        
        <Tab.Navigator 
            screenOptions={{
                tabBarStyle:{
                    backgroundColor: '#56AB2F',
                    borderTopColor: 'transparent',
                    borderTopStartRadius: 10,
                    borderTopEndRadius: 10,
                    height: 60,
                    alignContent: 'center',
                    justifyContent: 'center'
                },
                tabBarActiveTintColor: 'blue',
                headerShown: false
            }}
        >
            <Tab.Screen
                name="Home" 
                component={Home}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ focused}) => (
                        <Ionicons name="home" size= '35px' color={focused ? '#1C6119' : '#fff'}/>
                    )  
                }}
            />

            <Tab.Screen
                 name="Search" 
                 component={Search}
                 options={{
                    tabBarLabel: '',
                    tabBarIcon: ({focused}) => (
                        <Ionicons name="search" size= '35px'  color={focused ? '#1C6119' : '#fff'}/>
                    ) 
                 }}
            />

            <Tab.Screen
                name="Calendario" 
                component={Calendario}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({focused}) => (
                        <Feather name="calendar" size= '35px'  color={focused ? '#1C6119' : '#fff'}/>
                    )  
                }}
            />

            <Tab.Screen
                 name="Dash" 
                 component={Dashboard}
                 options={{
                    tabBarLabel: '',
                    tabBarIcon: ({focused}) => (
                        <MaterialIcons name="dashboard" size= '35px'  color={focused ? '#1C6119' : '#fff'}/>
                    )  
                 }}
            />

            <Tab.Screen
                name="Profile"
                component={MeuStack}
                options={({route}) => ({
                    tabBarStyle: {
                        display: getVisibilidadeTab(route),
                        backgroundColor: '#56AB2F',
                        borderTopColor: 'transparent',
                        borderTopStartRadius: 10,
                        borderTopEndRadius: 10,
                        height: 60,
                        alignContent: 'center',
                        justifyContent: 'center'
                    },
                    tabBarLabel: '',
                    tabBarIcon: ({focused}) => (
                        <MaterialCommunityIcons name="account" size= '35px'  color={focused ? '#1C6119' : '#fff'}/>
                    ),
                })}
            />
        </Tab.Navigator>
    );           
}

const getVisibilidadeTab = route => {
    // console.log(route);
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
  // console.log(routeName);

  if( routeName == 'Login' || routeName == 'Cadastro' ) {
    return 'none';
  }
  return 'flex';
}

