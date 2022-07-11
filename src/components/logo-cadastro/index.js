import React from 'react';
import {Logo, NomeApp} from './styles';
import { View } from 'react-native-web';

export default function LogoCadastro() {
  return (  
    <View style={{flexDirection: 'row', marginTop: '5%'}}>
        <Logo source={require('../../../assets/imgs/logo-header.png')}/>
        <NomeApp> LeafTi </NomeApp>
    </View>
   
  );
}