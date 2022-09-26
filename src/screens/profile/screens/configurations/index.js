import React from "react";
import { Container, ContainerOpcoes, Titulo, TituloConfig } from "./style";

export default function Familia(){
   return( 
    <Container>
        <ContainerOpcoes>
            <TituloConfig>E-mail:</TituloConfig>
            <Titulo>email@email.com</Titulo>
        </ContainerOpcoes>
        
        <ContainerOpcoes>
            <TituloConfig>Senha:</TituloConfig>
            <Titulo>*************</Titulo>
        </ContainerOpcoes>
    </Container>
   );
}