import React from "react";
import { Container, ContainerDesc, ContainerImagem, ContainerInfos, ContainerNomesPopulares, ContainerScroll, ImgPlanta, SectionInfo, TextoAdicionar, TextoDesc, TextoInfo, TextoInfoA, TextoNome, TextoNomeCien, TextoNomes, TextoTitulo, TextoTituloA, TituloNomes} from "./styles";
import { LinearGradient } from "expo-linear-gradient";

export default function PerfilPlanta({route}){
    const {img, nome, nomeCien, desc, nomePopular, solo, luzSolar, tamanho, irrigacao, toleranciaCalor} = route.params;

    return(
        <ContainerScroll>
            <LinearGradient colors={['#B5E59A', 'transparent']} start={{x: 1, y: 0}} end={{x: 1, y: 1}} locations={[0.5, 0.5]}>
                <ContainerImagem>
                    <ImgPlanta source={{uri: `${img}`}} />
                    <TextoNome>{nome}</TextoNome>
                    <TextoNomeCien>{nomeCien}</TextoNomeCien>
                </ContainerImagem>           
            </LinearGradient>

            <ContainerNomesPopulares>
                <TituloNomes>Nomes Populares:  </TituloNomes>
                <TextoNomes>
                   {nomePopular}
                </TextoNomes>
            </ContainerNomesPopulares>

            <ContainerDesc>
                <TextoDesc>
                    {desc}
                 </TextoDesc>
            </ContainerDesc>

            <ContainerInfos> 
                
                
                <SectionInfo>
                    <TextoTitulo>Luz Solar:</TextoTitulo>
                    <TextoInfo>{luzSolar}</TextoInfo>
                </SectionInfo>

                <TextoTituloA>Irrigação:</TextoTituloA>
                <TextoInfoA>{irrigacao}</TextoInfoA>

                <TextoTituloA>Solo:</TextoTituloA>
                <TextoInfoA>{solo}</TextoInfoA>
            
                <TextoTituloA>Tolerância de Temperatura:</TextoTituloA>
                <TextoInfoA>{toleranciaCalor}</TextoInfoA>

                <SectionInfo>
                    <TextoTitulo>Tamanho:</TextoTitulo>
                    <TextoInfo>{tamanho}</TextoInfo>
                </SectionInfo>
             
            </ContainerInfos>
        </ContainerScroll>
    );
}