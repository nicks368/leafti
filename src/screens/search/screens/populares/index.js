import React from "react";
import { FlatList} from "react-native";
import CardPopulares from "../../components/CardPopulares";
import { Container } from "./style";
import POPULARES from "../../../../../assets/data/populares";

export default function Populares({navigation}){
   return( 
    <Container>
        <FlatList
        columnWrapperStyle={{ 
            justifyContent: 'space-around',
            paddingTop: 10,
            paddingRight: 10,
          }}
          numColumns={2}
          horizontal= {false} 
          data={POPULARES} 
          keyExtractor={(item) => item.id} 
          renderItem = {({item}) => (
            <CardPopulares 
              imagem={item.imagemCard}
              nome={item.nome}
              desc={item.nomePopular}
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
                solo: item.solo,
              }
              )}}
            />
          )}
        />
    </Container>
   );
}