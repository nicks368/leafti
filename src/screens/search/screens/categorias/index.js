import React from "react";
import { FlatList} from "react-native";
import { Container, Desc, TituloEspecie } from "./style";
import BAIXAS from "../../../../../assets/data/baixa-irrigacao";
import MEDIA from "../../../../../assets/data/media-irrigacao";
import ALTA from "../../../../../assets/data/alta-irrigacao";

import PLENO from "../../../../../assets/data/sol-pleno";
import MEIA from "../../../../../assets/data/meia-sombra";
import SOMBRA from "../../../../../assets/data/sombra";

import GRANDE from "../../../../../assets/data/grande-porte";
import MEDIO from "../../../../../assets/data/medio-porte";
import PEQUENO from "../../../../../assets/data/pequeno-porte";
import CardEspecies from "../../components/CardEspecies";

export default function Categorias({navigation}){
   return( 
    <Container>
        <TituloEspecie>Baixa Irrigação</TituloEspecie>
        <FlatList 
          horizontal= {true} 
          data={BAIXAS} 
          keyExtractor={(item) => item.id} 
          renderItem = {({item}) => (
            <CardEspecies 
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

      <TituloEspecie>Irrigação Media</TituloEspecie>
        <FlatList 
          horizontal= {true} 
          data={MEDIA} 
          keyExtractor={(item) => item.id} 
          renderItem = {({item}) => (
            <CardEspecies 
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

        <TituloEspecie>Alta Irrigação</TituloEspecie>
        <FlatList 
          horizontal= {true} 
          data={ALTA} 
          keyExtractor={(item) => item.id} 
          renderItem = {({item}) => (
            <CardEspecies 
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

        <TituloEspecie>Sol Pleno</TituloEspecie>
        <Desc>O termo "sol pleno" quer dizer que a planta precisa de no mínimo 7 horas de sol por dia</Desc>
        <FlatList 
          horizontal= {true} 
          data={PLENO} 
          keyExtractor={(item) => item.id} 
          renderItem = {({item}) => (
            <CardEspecies 
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

        <TituloEspecie>Meia Sombra</TituloEspecie>
        <Desc>O termo "meia-sombra" quer dizer ela precisa de pelo menos 3 horas de sol</Desc>
        <FlatList 
          horizontal= {true} 
          data={MEIA} 
          keyExtractor={(item) => item.id} 
          renderItem = {({item}) => (
            <CardEspecies 
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

        <TituloEspecie>Plantas de Sombra</TituloEspecie>
        <Desc>O termo "plantas de sombra" quer dizer que elas só precisam de luz indireta (difusa) no ambiente.</Desc>
        <FlatList 
          horizontal= {true} 
          data={SOMBRA} 
          keyExtractor={(item) => item.id} 
          renderItem = {({item}) => (
            <CardEspecies 
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

        <TituloEspecie>Grande Porte</TituloEspecie>
        <FlatList 
          horizontal= {true} 
          data={GRANDE} 
          keyExtractor={(item) => item.id} 
          renderItem = {({item}) => (
            <CardEspecies 
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

        <TituloEspecie>Porte Medio</TituloEspecie>
        <FlatList 
          horizontal= {true} 
          data={MEDIO} 
          keyExtractor={(item) => item.id} 
          renderItem = {({item}) => (
            <CardEspecies 
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

        <TituloEspecie>Pequeno Porte</TituloEspecie>
        <FlatList 
          horizontal= {true} 
          data={PEQUENO} 
          keyExtractor={(item) => item.id} 
          renderItem = {({item}) => (
            <CardEspecies 
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