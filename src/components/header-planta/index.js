import React from 'react';
import {View, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function HeaderPlanta({title, navigation}){
    return(
        <View style={estilos.header}>
            <TouchableOpacity style={{paddingTop: StatusBar.currentHeight}} onPress={navigation}>
                <AntDesign name="arrowleft" size={22} color="white" />
            </TouchableOpacity>
            <Text style={estilos.titulo}>{title}</Text>
        </View>
    );
}

const estilos = StyleSheet.create({
    header: {
        backgroundColor: '#56AB2F',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 15,
        paddingTop: 10,
        height: 90, //100 pra fica show no android e 70 na web
    },

    logo: {
        width: 40,
        height: 40,
        resizeMode: 'contain'
    },
    titulo:{
        paddingTop: StatusBar.currentHeight,  
        fontSize: 18,
        color: '#fff',
        marginLeft: 10,
        fontFamily: 'Roboto_500Medium',
    }
})