import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
`

export const ContainerPerfil = styled.View`
    flex: 0.7;
    justify-content: center;
    align-items: center;
    background-color: #B5E59A;
    width: 100%;
`

export const FotoPerfil = styled.Image`
    width: 160px;
    height: 160px;
    border-radius: 100px;
    border: 3px #56AB2F;
`

export const NomePerfil = styled.Text`
    font-size: 26px;
    text-align: center;
    font-family: 'Roboto_500Medium';
`

export const ContainerBotoes = styled.View`
    flex: 3;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const BtnOpcao = styled.TouchableOpacity`
    width: 90%;
    height: 55px;
    flex-direction: row;
    align-items: center;
    padding-left: 10px;
    margin-top: 12px;
    
`
export const TextBtn = styled.Text`
    font-size: 20px;
    font-family: 'Roboto_500Medium';
    color: #56AB2F;
    margin-left: 10px;
`

export const ContainerSair = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
`

export const TextoSair = styled.Text`
    font-size: 18px;
    color: #535353;
    font-style: italic;
`
