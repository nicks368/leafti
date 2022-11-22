import React, { useEffect} from 'react';
import { Titulo, Container, ContainerSuasPlantas, ContainerMaisPopulares,
  TextoFundo,
  ContainerNaoAdicionado, } from './styles';
  
import { FlatList, View } from 'react-native';
import CardPlanta from './components/CardPlanta';
import CardFavoritos from './components/CardFavoritos';
import PLANTAS from '../../../assets/data/plantas';

import { useFavoritos } from '../../context/favoritos';
import { Entypo } from '@expo/vector-icons';

export default function Home({navigation, route}) {

  const {add, favoritos} = useFavoritos()

  function SemPlantas(){
    return(
      <ContainerNaoAdicionado>
          <Entypo name="flower" style={{fontSize: 45}} color="#9C9C9C" />
          <TextoFundo> Nenhuma planta adicionada :( </TextoFundo>
      </ContainerNaoAdicionado>
    )
  }

  function ComPlantas(favoritos){
    return(
      <ContainerSuasPlantas>
        <FlatList 
          horizontal= {true} 
          data={favoritos} 
          keyExtractor={(item) => item.id} 
          renderItem = {({item}) => (CardFav(item))}
        />
      </ContainerSuasPlantas>
    )
  }

  function TelaPlantas(favoritos){
    if (favoritos) {
      return <ComPlantas favoritos={favoritos}/>
    } else {
      return <SemPlantas />
    }
  }

  function CardFav(item){
    return(
      <CardFavoritos
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
    )
  }

  function CardPopulares(item){
    return(
      <CardPlanta
      imagem={item.imagemCard}
      nome={item.nome}
      desc={item.descCard}
      item={item}
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
        toleranciaCalor: item.toleranciaCalor,
      }
      )}}
      />
    );
  }

  return (
    <Container>
      
      <Titulo> Suas Plantas</Titulo>
      
      {/* <ContainerNaoAdicionado>
          <Entypo name="flower" style={{fontSize: 45}} color="#9C9C9C" />
          <TextoFundo> Nenhuma planta adicionada :( </TextoFundo>
      </ContainerNaoAdicionado> */}

      {favoritos
      ? <ContainerSuasPlantas>
          <FlatList 
            horizontal= {true} 
           data={favoritos} 
            keyExtractor={(item) => item.id} 
            renderItem = {({item}) => (CardFav(item))}
          />
        </ContainerSuasPlantas>
          
      : <ContainerNaoAdicionado>
          <Entypo name="flower" style={{fontSize: 45}} color="#9C9C9C" />
          <TextoFundo> Nenhuma planta adicionada :( </TextoFundo>
         </ContainerNaoAdicionado>
      }
      {/* <ContainerSuasPlantas>
          <FlatList 
            horizontal= {true} 
            data={favoritos} 
            keyExtractor={(item) => item.id} 
            renderItem = {({item}) => (CardFav(item))}
          />
      </ContainerSuasPlantas> */}
      {/* <TelaPlantas favoritos={favoritos}/> */}
      
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
          renderItem = {({item}) => (CardPopulares(item))}
        />
         
      </ContainerMaisPopulares>
    </Container>
  );
}
