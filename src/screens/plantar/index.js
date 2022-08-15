import React from 'react';
import {FlatList, Linking} from 'react-native';
import { Container, ContainerIntro, ContainerOng, Texto, Titulo, TituloOng } from './styles';
import ONGS from '../../../assets/data/ongs';

import CardOng from './components/CardOng';

export default function Dashboard() {
  
  return (
    <Container>
      <ContainerIntro>
        <Titulo>Primeiros Passos</Titulo>

        <Texto>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut maximus quam. 
          Etiam scelerisque bibendum gravida. In maximus dictum ligula, nec commodo tortor posuere eu.
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