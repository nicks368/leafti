import React from 'react';
import {View, SafeAreaView, StyleSheet, Image, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Header({title}) {
  return (
    <SafeAreaView>
    <LinearGradient 
        colors={['#56AB2F', '#7CC447', '#99CB5B']} 
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0.1}}
    >
      
        <View style={estilos.header}>
          <Image 
              source={require('../../../assets/imgs/logo-header.png')}
              style={estilos.logo}
          />
          <Text style={estilos.titulo}> {title}</Text>
        </View>
      
    </LinearGradient>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
    header: {
        alignItems: 'center',
        flexDirection: 'row',
        padding: 15,
        height: 70, //100 pra fica show no android e 70 na web
        paddingTop: 20 //statusbar.currentHeight
    },

    logo: {
        width: 40,
        height: 40,
        resizeMode: 'contain'
    },
    titulo:{
      fontSize: 22,
      color: '#fff',
      marginLeft: 10,
    }
})