import React from 'react';
import {Logo, NomeApp} from './styles';
import { View } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default function LogoCadastro() {
  return (  
    <View style={{flexDirection: 'row', marginTop: '5%', alignItems: 'center'}}>
        <Logo 
          source={require('../../../assets/imgs/logo-header.png')}
          style={{width: RFPercentage(4), height: RFPercentage(4)}}  
        />
        <NomeApp style={{fontSize: RFPercentage(4)}} > LeafTi </NomeApp>
    </View>
   
  );
}