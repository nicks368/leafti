import React from 'react';
import {View, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function HeaderTermos({title, navigation}){
    return(
        <View style={estilos.header}>
            <TouchableOpacity style={{}} onPress={navigation}>
                <AntDesign name="arrowleft" size={22} color="black" />
            </TouchableOpacity>
            <Text style={estilos.titulo}>{title}</Text>
        </View>
    );
}

const estilos = StyleSheet.create({
    header: {
        backgroundColor: '#E7E7E7',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 15,
        paddingTop: 10,
        height: 60, //100 pra fica show no android e 70 na web
    },

    logo: {
        width: 40,
        height: 40,
        resizeMode: 'contain'
    },
    titulo:{ 
        fontSize: 18,
        color: '#000',
        marginLeft: 10,
        fontFamily: 'Roboto_500Medium',
    }
})