import styled from "styled-components/native";

export const Container = styled.View`
`

export const ContainerInfo = styled.View`
    padding: 20px;
    padding-top: 0;
`

export const Texto = styled.Text`
    font-size: 18px;
    text-align: justify;
    color: #6AA668;
    font-family: 'Lexend_300Light';  
`

export const ContainerCard = styled.TouchableOpacity`
    background-color: white;
    width: 94%;
    padding: 12px;
    margin: 3%;
    margin-bottom: 15px;
    border-radius: 15px;
    flex-direction: row;
`

export const Imagem = styled.Image`
    width: 45%;
    height: 140px;
    border-radius: 10px;
    margin-right: 18px;
`

export const ContainerTexto = styled.View`
    flex: 1;
    padding-top: 5px;
`

export const NomeOng = styled.Text`
    font-size: 20px;
    font-family: 'Roboto_400Regular';
    color: #1C6119;
    text-transform: capitalize;
    font-weight: bold;
    margin-bottom: 5px;
`

export const DescOng = styled.Text`
    font-size: 16px;
    font-family: 'Roboto_400Regular';
    color: #7C7C7C;
    font-style: italic;
`

export const ContainerSeta = styled.View`
    flex: 1;
    align-items: flex-end;
    justify-content: flex-end;
`