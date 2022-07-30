import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    background-color: white;
    width: 94%;
    padding: 12px;
    margin: 3%;
    margin-bottom: 5px;
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
    color: #56AB2F;
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 5px;
`

export const DescOng = styled.Text`
    font-size: 16px;
    font-family: 'Roboto_400Regular';
    color: #656565;
`

export const ContainerSeta = styled.View`
    flex: 1;
    align-items: flex-end;
    justify-content: flex-end;
`