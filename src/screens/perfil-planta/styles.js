import styled from "styled-components/native";

export const ContainerScroll = styled.ScrollView`
    flex: 1;
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
    text-transform: capitalize;
`

export const TextoNomeCien = styled.Text`
    color: #1C6119;
    font-size: 16px;
    font-family: 'Roboto_300Light';
    font-style: italic;
    text-transform: capitalize;
`

export const ContainerDesc = styled.View`
    padding: 20px;
    padding-top: 0;
`

export const TextoDesc = styled.Text`
    color: #4C4C4C;
    font-size: 16px;
    font-family: 'Roboto_400Regular';
    text-align: justify;
`

export const ContainerInfos = styled.View`
    padding: 20px;
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

export const TextoAdicionar = styled.Text`
    margin-top: 20px;
    color: #5B3932;
    font-size: 18px;
    font-weight: bold;
    font-family: 'Roboto_400Regular';
    text-align: center;
`