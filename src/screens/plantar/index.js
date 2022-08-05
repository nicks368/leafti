import React from 'react';
import {FlatList} from 'react-native';
import { Container, ContainerIntro, ContainerOng, Texto, Titulo } from './styles';
import ONGS from '../../../assets/data/ongs';

import CardOng from './components/CardOng';

export default function Dashboard() {
  
  return (
    <Container>
      <ContainerIntro>
        <Titulo>Onde Plantar</Titulo>

        <Texto>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut maximus quam. 
          Etiam scelerisque bibendum gravida. In maximus dictum ligula, nec commodo tortor posuere eu.
        </Texto>
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
            />
          )}
        />
      </ContainerOng>
    </Container>
  );
}