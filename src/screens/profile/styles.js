import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    align-items: center;
`

export const ContainerPerfil = styled.View`
    flex: 1;
    margin-top: 25px;
`

export const FotoPerfil = styled.Image`
    width: 160px;
    height: 160px;
    border-radius: 100%;
    border: 3px #56AB2F;
`

export const NomePerfil = styled.Text`
    font-size: 6vw;
    text-align: center;
    font-family: 'Roboto_500Medium';
    margin-top: 10px;
`

export const ContainerBotoes = styled.View`
    flex: 2;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const BtnOpcao = styled.TouchableOpacity`
    width: 90%;
    height: 55px;
    border-radius: 6px;
    box-shadow: 5px 5px 10px gray;
    flex-direction: row;
    align-items: center;
    padding-left: 10px;
    margin-top: 12px;
`
export const TextBtn = styled.Text`
    font-size: 6vw;
    font-family: 'Roboto_500Medium';
    color: #56AB2F;
    margin-left: 10px;
`
