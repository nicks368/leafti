import React from 'react';
import { Titulo, Container, ContainerSuasPlantas, ContainerMaisPopulares,
   TextoFundo } from './styles';
  
import { FlatList } from 'react-native';
import CardPlanta from './components/CardPlanta';
import PLANTAS from '../../../assets/data/plantas';

import { Entypo } from '@expo/vector-icons'; 

export default function Home({navigation, route}) {
  return (
    <Container>
      
      <Titulo> Suas Plantas</Titulo>
      <ContainerSuasPlantas> 
        <Entypo name="flower" style={{fontSize: 45}} color="#9C9C9C" />
        <TextoFundo> Nenhuma planta adicionada :( </TextoFundo>
      </ContainerSuasPlantas>
      
      <Titulo> Mais Populares</Titulo>
      <ContainerMaisPopulares>       
        <FlatList 
          columnWrapperStyle={{ 
            justifyContent: 'space-around',
            paddingTop: 10,
            paddingRight: 10,
          }}
          numColumns={2}
          horizontal= {false} 
          data={PLANTAS} 
          keyExtractor={(item) => item.id} 
          renderItem = {({item}) => (
            <CardPlanta 
              imagem={item.imagemCard}
              nome={item.nome}
              desc={item.descCard}
              onPress={()=> {navigation.navigate('PerfilPlanta', {
                img: item.img,
                nome: item.nome,
                nomeCien: item.nomeCien,
                desc: item.desc,
                nomePopular: item.nomePopular,
                familia: item.familia,
                especie: item.especie,
                luzSolar: item.luzSolar,
                tamanho: item.tamanho,
                irrigacao: item.irrigacao,
                toleranciaCalor: item.toleranciaCalor
              }
              )}}
            />
          )}
        />
         
      </ContainerMaisPopulares>
    </Container>
  );
}

