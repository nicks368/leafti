import React from 'react';
import {View, SafeAreaView, StyleSheet, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Header() {
  return (
    <LinearGradient 
        colors={['#56AB2F', '#7CC447', '#99CB5B']} 
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0.1}}
    >
      <SafeAreaView>
        <View style={estilos.header}>
          <Image 
              source={require('../../../assets/imgs/logo-header.png')}
              style={estilos.logo}
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const estilos = StyleSheet.create({
    header: {
        alignItems: 'center',
        flexDirection: 'row',
        padding: 15,
        height: 60
    },

    logo: {
        width: 40,
        height: 40,
        resizeMode: 'contain'
    }
})