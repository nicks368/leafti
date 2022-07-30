import React from 'react';
import {View} from 'react-native';
import { Calendar } from 'react-native-plain-calendar';
import Mes from './components/Mes/Mes';
import DiasSemana from './components/DiasSemanas/DiasSemana';

export default function Calendario() {
  return (
    <View style={{padding: 20}}>
      <Calendar 
        //Borda do dia atual
        todayStyle={{borderColor: 'black'}}
        //Alterar style do texto dos dias
        dayTextStyle={{fontSize: 20, margin: -10, color: '#56AB2F'}}
        WeekdaysComponent={DiasSemana}
        headerTitleStyle={{fontSize: 20}}
        HeaderComponent={Mes}
      />
    </View>
  );
}