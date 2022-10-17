import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    background-color: white;
    width: 260px;
    height: 230px;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 15px;
    margin-top: 20px;
    margin-left: 20px;
`

export const Imagem = styled.Image`
    width: 100%;
    height: 100px;
    border-radius: 10px;
    margin-bottom: 10px;
`

export const NomePlanta = styled.Text`
    font-size: 18px;
    font-family: 'Roboto_400Regular';
    color: #56AB2F;
    text-transform: uppercase;
    font-weight: bold;
`

export const DescPlanta = styled.Text`
    font-size: 14px;
    font-family: 'Roboto_400Regular';
    color: #000;
`

export const BotaoFav = styled.TouchableOpacity`
    width: 24px;
    height: 24px;
    background-color: white;
    align-self: flex-end;
    padding: 0;
`