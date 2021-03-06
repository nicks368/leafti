import React from "react";
import { FlatList} from "react-native";
import { Container, ContainerFlat, TituloEspecie } from "./style";
import PLANTAS from "../../../../../assets/data/plantas";
import CardEspecies from "../../components/CardEspecies";

export default function Especies(){
   return( 
    <Container>
        <TituloEspecie>Florais</TituloEspecie>
        <FlatList 
          horizontal= {true} 
          data={PLANTAS} 
          keyExtractor={(item) => item.id} 
          renderItem = {({item}) => (
            <CardEspecies 
              imagem={item.imagem}
              nome={item.nome}
              desc={item.desc}
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
              imagem={item.imagem}
              nome={item.nome}
              desc={item.desc}
            />
          )}
        />
    </Container>
   );
}