import React from "react";
import { Container, ContainerCard, ContainerInfo, ContainerSeta, ContainerTexto, DescOng, Imagem, NomeOng, Texto } from "./styles";
import { StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default function CardOng({nome, descCard, imagem, onPress}) {  
    return (
        <Container>
            
            <ContainerCard style={estilo.sombra} onPress={onPress}>
                <Imagem source={{uri: `${imagem}`}}/>
                <ContainerTexto>
                    <NomeOng>{nome}</NomeOng>
                    <DescOng adjustsFontSizeToFit numberOfLines={5}>"{descCard}"</DescOng>
                    <ContainerSeta>
                        <AntDesign name="arrowright" style={{fontSize: 22}} color="black" />
                    </ContainerSeta>
                </ContainerTexto>
            </ContainerCard> 
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