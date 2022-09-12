import React from "react";
import { Container, ContainerDesc, ContainerImagem, ContainerInfos, ContainerNomesPopulares, ContainerScroll, ImgPlanta, SectionInfo, TextoAdicionar, TextoDesc, TextoInfo, TextoNome, TextoNomeCien, TextoNomes, TextoTitulo, TituloNomes} from "./styles";
import { LinearGradient } from "expo-linear-gradient";

export default function PerfilPlanta({route}){
    const {img, nome, nomeCien, desc, nomePopular, familia, especie, luzSolar, tamanho, irrigacao, toleranciaCalor} = route.params;

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

                 <TextoAdicionar>Adicionar ao Jardim +</TextoAdicionar>
            </ContainerDesc>

            <ContainerInfos>
                <SectionInfo>
                    <TextoTitulo>Família:</TextoTitulo>
                    <TextoInfo>{familia}</TextoInfo>
                </SectionInfo>

                <SectionInfo>
                    <TextoTitulo>Espécie:</TextoTitulo>
                    <TextoInfo>{especie}</TextoInfo>
                </SectionInfo>
                
                <SectionInfo>
                    <TextoTitulo>Luz Solar:</TextoTitulo>
                    <TextoInfo>{luzSolar}</TextoInfo>
                </SectionInfo>  

                <SectionInfo>
                    <TextoTitulo>Tamanho:</TextoTitulo>
                    <TextoInfo>{tamanho}</TextoInfo>
                </SectionInfo>

                <SectionInfo>
                    <TextoTitulo>Irrigação:</TextoTitulo>
                    <TextoInfo>{irrigacao}</TextoInfo>
                </SectionInfo>

                <SectionInfo>
                    <TextoTitulo>Tolerância de Temperatura:</TextoTitulo>
                    <TextoInfo>{toleranciaCalor}</TextoInfo>
                </SectionInfo>             
            </ContainerInfos>
        </ContainerScroll>
    );
}