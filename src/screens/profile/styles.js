import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
`

export const ContainerPerfil = styled.View`
    flex: 1.5;
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

export const ContainerConfig = styled.View`
    flex: 2;
    padding: 12px;
    padding-top: 20px;
    align-items: center;
    width: 100%;
`

export const Titulo = styled.Text`
    text-align: center;
    font-size: 22px;
    font-family: 'Roboto_500Medium';
    text-decoration: underline;
`

export const ContainerBotoes = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
    width: 90%;
`

export const TituloRow = styled.Text`
    font-size: 18px;
    font-family: 'Roboto_500Medium';
`

export const TextoRow = styled.Text`
    font-size: 18px;
    font-family: 'Roboto_500Medium';
    font-style: italic;
`

export const Botao = styled.TouchableOpacity`
    width: 90%;
    background-color: #8DDF5F;
    padding: 10px;
    align-items: center;
    border-radius: 10px;
    margin-top: 40%;
`

export const TextoBotao = styled.Text`
    font-size: 16px;
    font-family: 'Roboto_500Medium';
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
