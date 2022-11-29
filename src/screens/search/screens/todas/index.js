import React, { useState } from "react";
import { FlatList} from "react-native";
import CardPopulares from "../../components/CardPopulares";
import { Container, InputPesquisa, ContainerPesquisa } from "./style";
import PLANTAS from "../../../../../assets/data/plantas";
import { Feather } from '@expo/vector-icons';

export default function Todas({navigation}){
  const [originalData, setOrigininalData] = useState(PLANTAS);
  const [data, setData] = useState(PLANTAS);
  
  function Card(item){
    return(
      <CardPopulares 
        imagem={item.imagemCard}
        nome={item.nome}
        desc={item.nomePopular}
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
          solo: item.solo,
        }
        )}}
      />
    );
  } 
  
  function Pesquisar(pesquisa){
    let arr = JSON.parse(JSON.stringify(originalData));
    setData(arr.filter((d) => d.nome.toLowerCase().includes(pesquisa.toLowerCase()) || d.nomePopular.toLowerCase().includes(pesquisa.toLowerCase())))
  }


  return( 
    <Container>
        <ContainerPesquisa>
          <Feather name="search" size={28} color="#6D6D6D"/>
          <InputPesquisa 
            placeholder="Pesquisar" 
            onChangeText={(pesquisa)=>Pesquisar(pesquisa)}
            autoCapitalize="none"
          />
        </ContainerPesquisa>
        
        <FlatList
        columnWrapperStyle={{ 
            justifyContent: 'space-around',
            paddingTop: 10,
            paddingRight: 10,
          }}
          numColumns={2}
          horizontal= {false} 
          data={data} 
          keyExtractor={(item) => item.id} 
          renderItem = {({item}) => (Card(item))}
        />
    </Container>
   );
}