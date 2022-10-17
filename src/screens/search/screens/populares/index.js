import React from "react";
import { FlatList} from "react-native";
import CardPopulares from "../../components/CardPopulares";
import { Container } from "./style";
import PLANTAS from "../../../../../assets/data/plantas";

export default function Populares(){
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
          data={PLANTAS} 
          keyExtractor={(item) => item.id} 
          renderItem = {({item}) => (
            <CardPopulares 
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