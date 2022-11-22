import React from "react";
import { BotaoFav, Container, DescPlanta, Imagem, NomePlanta } from "./styles";
import { StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useFavoritos } from "../../../../context/favoritos";

export default function CardEspecies({nome, desc, imagem, item}) {  
    
    const {add} = useFavoritos() 
  
    return (
        <Container style={estilo.sombra}>
            <Imagem source={{uri: `${imagem}`}}/>
            <NomePlanta>{nome}</NomePlanta>
            <DescPlanta adjustsFontSizeToFit numberOfLines={4}>{desc}</DescPlanta>
            <BotaoFav onPress={()=> add(item)}>
              <Ionicons name="heart" size={24} color="#FF3F3F" />
            </BotaoFav>
        </Container>
    );

}

const estilo = StyleSheet.create({
  sombra: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  }
})