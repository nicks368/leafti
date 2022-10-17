import React from "react";
import { FlatList} from "react-native";
import { Container, TituloEspecie } from "./style";
import PLANTAS from "../../../../../assets/data/plantas";
import CardEspecies from "../../components/CardEspecies";

export default function Categorias(){
   return( 
    <Container>
        <TituloEspecie>Florais</TituloEspecie>
        <FlatList 
          horizontal= {true} 
          data={PLANTAS} 
          keyExtractor={(item) => item.id} 
          renderItem = {({item}) => (
            <CardEspecies 
              imagem={item.imagemCard}
              nome={item.nome}
              desc={item.descCard}
              item={item}
            />
          )}
        />

      <TituloEspecie>Suculentas</TituloEspecie>
        <FlatList 
          horizontal= {true} 
          data={PLANTAS} 
          keyExtractor={(item) => item.id} 
          renderItem = {({item}) => (
            <CardEspecies 
              imagem={item.imagemCard}
              nome={item.nome}
              desc={item.descCard}
              item={item}
            />
          )}
        />
    </Container>
   );
}