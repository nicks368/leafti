import styled from "styled-components/native";

export const ContainerScroll = styled.ScrollView`

`

export const Container = styled.View`
    flex: 1;
`

export const ContainerImagem = styled.View`
    height: 280px;
    align-items: center;
    justify-content: center;
`

export const ImgPlanta = styled.Image`
    border-radius: 100px;
    border: 4px #FFF;
    margin-top: 50px;
    width: 150px;
    height: 150px;
`

export const TextoNome = styled.Text`
    color: #1C6119;
    font-size: 25px;
    font-family: 'Roboto_400Regular';
    font-weight: bold;
    
`

export const TextoNomeCien = styled.Text`
    color: #1C6119;
    font-size: 16px;
    font-family: 'Roboto_300Light';
    font-style: italic;
`

export const ContainerDesc = styled.View`
    height: 200px;
    padding: 20px;
    padding-top: 0;
`

export const TextoDesc = styled.Text`
    color: #1C6119;
    font-size: 16px;
    font-family: 'Roboto_400Regular';
    text-align: justify;
`

export const ContainerInfos = styled.View`
    flex: 2;
    padding: 20px;
    padding-top: 0;
    
`

export const SectionInfo = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
`

export const TextoTitulo = styled.Text`
    color: #1C6119;
    font-size: 16px;
    font-family: 'Roboto_400Regular';
`

export const TextoInfo = styled.Text`
    color: #3F8E3B;
    font-size: 16px;
    font-family: 'Roboto_300Light';
    font-style: italic;
`