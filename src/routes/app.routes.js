import React from 'react';
import 'react-native-gesture-handler';
import { getHeaderTitle } from '@react-navigation/elements';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import LogoHeader from '../components/logo-header';

import StackHome from './stack.home.routes';
import Search from '../screens/search/index';
import StackOngs from './stack.ong.routes';
import StackPerfil from './stack.perfil.routes';
import Header from '../components/header';

import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'


const Tab = createBottomTabNavigator();

export default function AppRoutes(){
    return (
        
        <Tab.Navigator 
            screenOptions={{
                tabBarStyle:{
                    backgroundColor: '#56AB2F',
                    borderTopWidth: 0,
                    borderTopColor: 'transparent',
                    borderStartColor: 'transparent',
                    borderEndColor: 'transparent',
                    borderTopStartRadius: 10,
                    borderTopEndRadius: 10,
                    height: 60,
                    alignContent: 'center',
                    justifyContent: 'center',
                },
                tabBarActiveTintColor: 'blue',
                // headerStyle:{
                //     backgroundColor: '#56AB2F',
                // }, 
                // headerTitleStyle: {
                //     color: 'white',
                // },
                header: ({route, options}) => {
                    const title = getHeaderTitle(options, route.name);

                    return <Header title={title}/>
                }
            }}
           
            
        >
            <Tab.Screen
                name="Home" 
                component={StackHome}
                options={({route}) =>({
                    headerShown: getVisibilidadeHeader(route),
                    tabBarLabel: '',
                    tabBarIcon: ({ focused}) => (
                        <Ionicons name="home" style={estilos.icones} color={focused ? '#1C6119' : '#fff'}/>
                    ),
                    headerLeft: ()=> (
                        <LogoHeader/>
                    ),
                })}
            
            />

            <Tab.Screen
                 name="Pesquisar" 
                 component={Search}
                 options={{
                    tabBarLabel: '',
                    tabBarIcon: ({focused}) => (
                        <MaterialCommunityIcons name="book" style={estilos.icones} color={focused ? '#1C6119' : '#fff'}/>
                    ),
                    headerLeft: ()=> (
                        <LogoHeader/>
                    ), 
                 }}
            />

            <Tab.Screen
                 name="Ongs" 
                 component={StackOngs}
                 options={({route})=> ({
                    tabBarLabel: '',
                    tabBarIcon: ({focused}) => (
                        <MaterialCommunityIcons name="tree" style={estilos.icones} color={focused ? '#1C6119' : '#fff'}/>
                    ),
                    headerLeft: ()=> (
                        <LogoHeader/>
                    ), 
                })}
            />

            <Tab.Screen
                name="Perfil"
                component={StackPerfil}
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

  if( routeName == 'Login' || routeName == 'Cadastro' || routeName == 'PerfilPlanta' || routeName == 'Formulário') {
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

