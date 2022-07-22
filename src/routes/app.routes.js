import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import LogoHeader from '../components/logo-header';

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
                    justifyContent: 'center',
                },
                tabBarActiveTintColor: 'blue',
                headerStyle:{
                    backgroundColor: '#56AB2F',
                }, 
                headerTitleStyle: {
                    color: 'white',
                }
            }}
           
            
        >
            <Tab.Screen
                name="Home" 
                component={Home}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ focused}) => (
                        <Ionicons name="home" style={estilos.icones} color={focused ? '#1C6119' : '#fff'}/>
                    ),
                    headerLeft: ()=> (
                        <LogoHeader/>
                    ),
                }}
            
            />

            <Tab.Screen
                 name="Pesquisar" 
                 component={Search}
                 options={{
                    tabBarLabel: '',
                    tabBarIcon: ({focused}) => (
                        <Ionicons name="search" style={estilos.icones} color={focused ? '#1C6119' : '#fff'}/>
                    ),
                    headerLeft: ()=> (
                        <LogoHeader/>
                    ), 
                 }}
            />

            <Tab.Screen
                name="Calendário" 
                component={Calendario}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({focused}) => (
                        <Feather name="calendar" style={estilos.icones} color={focused ? '#1C6119' : '#fff'}/>
                    ),
                    headerLeft: ()=> (
                        <LogoHeader/>
                    ), 
                }}
            />

            <Tab.Screen
                 name="Plantar" 
                 component={Dashboard}
                 options={{
                    tabBarLabel: '',
                    tabBarIcon: ({focused}) => (
                        <MaterialIcons name="dashboard" style={estilos.icones} color={focused ? '#1C6119' : '#fff'}/>
                    ),
                    headerLeft: ()=> (
                        <LogoHeader/>
                    ),  
                 }}
            />

            <Tab.Screen
                name="Perfil"
                component={MeuStack}
                options={({route}) => ({
                    headerShown: getVisibilidadeHeader(route),
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
                        <MaterialCommunityIcons name="account" style={estilos.icones} color={focused ? '#1C6119' : '#fff'}/>
                    ),
                    headerLeft: ()=> (
                        <LogoHeader/>
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

const getVisibilidadeHeader = route => {
    // console.log(route);
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
  // console.log(routeName);

  if( routeName == 'Login' || routeName == 'Cadastro' ) {
    return false;
  }
  return true;
}

const estilos = StyleSheet.create ({
    icones: {
        fontSize: 35,
        marginTop: 10,
    }
})

