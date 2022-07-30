import React from "react";
import { Container, ContainerSeta, ContainerTexto, DescOng, Imagem, NomeOng } from "./styles";
import { StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default function CardOng({nome, desc, imagem}) {  
    return (
        <Container style={estilo.sombra}>
            <Imagem source={{uri: `${imagem}`}}/>
            <ContainerTexto>
                <NomeOng>{nome}</NomeOng>
                <DescOng>{desc}</DescOng>
                <ContainerSeta>
                    <AntDesign name="arrowright" style={{fontSize: 22}} color="black" />
                </ContainerSeta>
            </ContainerTexto>
        </Container>
    );

}

const estilo = StyleSheet.create({
  sombra: {
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  }
})