import React from 'react';
import {FlatList, Linking} from 'react-native';
import { Container, ContainerIntro, ContainerOng, Texto, Titulo, TituloOng } from './styles';
import ONGS from '../../../assets/data/ongs';

import CardOng from './components/CardOng';

export default function Ongs() {
  
  return (
    <Container>
      <ContainerIntro>
        <Titulo>Primeiros Passos</Titulo>

        <Texto>
          Está buscando algo a mais para fazer pelo meio ambiente? Conheça algumas ONGs que podem ajudar neste processo.
        </Texto>

        <TituloOng>ONG'S</TituloOng>
      </ContainerIntro>

      <ContainerOng>
      <FlatList        
          horizontal= {false} 
          data={ONGS} 
          keyExtractor={(item) => item.id} 
          renderItem = {({item}) => (
            <CardOng 
              imagem={item.imagem}
              nome={item.nome}
              desc={item.desc}
              descCard={item.descCard}
              onPress={() => {Linking.openURL(`${item.link}`)}}
            />
          )}
        />
      </ContainerOng>
    </Container>
  );
}