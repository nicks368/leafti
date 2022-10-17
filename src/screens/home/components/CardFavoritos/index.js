import React from "react";
import { Container, DescPlanta, Imagem, NomePlanta } from "./styles";
import { StyleSheet } from "react-native";

export default function CardFavoritos({nome, desc, imagem, onPress}) {  
    return (
        <Container style={estilo.sombra} onPress={onPress}>
            <Imagem source={{uri: `${imagem}`}}/>
            <NomePlanta>{nome}</NomePlanta>
            <DescPlanta>{desc}</DescPlanta>
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