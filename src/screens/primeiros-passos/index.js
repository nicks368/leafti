import React from "react";
import { BtnProxima, Container, ContainerImagem, ContainerScroll, ContainerTitulo, ImagemFundo, TextoBotao, Titulo } from "./styles.js";

export default function PrimeirosPassos({navigation}){
    return(
        <Container>
            <ContainerTitulo>
                <Titulo>Qual a importância das suas ações?</Titulo>
            </ContainerTitulo>

            <ContainerScroll contentContainerStyle={{paddingHorizontal: 10, paddingBottom: 20}}>
                <ImagemFundo source={require('../../../assets/imgs/img-fundo.png')} resizeMode="contain"/>
                <BtnProxima onPress={()=> {navigation.navigate('ongs')}}>
                    <TextoBotao>Começar</TextoBotao>
                </BtnProxima>

            </ContainerScroll>
            
        </Container>
    );
}