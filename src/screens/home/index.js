import React from 'react';
import { Titulo, Container, ContainerSuasPlantas, ContainerMaisPopulares,
   TextoFundo } from './styles';
  
import { FlatList } from 'react-native';
import CardPlanta from './components/CardPlanta';
import PLANTAS from '../../../assets/data/plantas';

import { Entypo } from '@expo/vector-icons'; 
import { useFonts, Lexend_300Light } from '@expo-google-fonts/lexend';
import { Roboto_400Regular } from "@expo-google-fonts/roboto";
import AppLoading from 'expo-app-loading';

export default function Home() {
  
  const [fontsLoaded] = useFonts({
    Lexend_300Light,
    Roboto_400Regular,
  })
  
  if (!fontsLoaded){
    return <AppLoading />
  }

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
              imagem={item.imagem}
              nome={item.nome}
              desc={item.desc}
            />
          )}
        />
         
    
      </ContainerMaisPopulares>

    </Container>
  );
}

