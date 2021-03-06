import React from 'react';
import {Logo, NomeApp} from './styles';
import { View } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default function LogoLogin() {
  return (  
    <View style={{flexDirection: 'row', marginTop: '5%', alignItems: 'center'}}>
        <Logo 
          source={require('../../../assets/imgs/logo-header.png')}
          style={{width: RFPercentage(6), height: RFPercentage(6)}}  
        />
        <NomeApp style={{fontSize: RFPercentage(6)}} > LeafTi </NomeApp>
    </View>
   
  );
}