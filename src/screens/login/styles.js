import styled from "styled-components/native";

export const DismissKeyboard = styled.TouchableWithoutFeedback`
    
`

export const Container = styled.View`
    flex: 1;
    align-items: center;
    font-family: 'Lexend_300Light';
`

export const ContainerLogo = styled.View`
    flex: 1;
    width: 90%;
    align-items: center;
`

export const ContainerForm = styled.View`
    flex: 3;
    width: 70%;
`

export const Titulo = styled.Text`
    color: #1C6119;
    font-size: 45px;
    font-family: 'Lexend_300Light';
    margin-bottom: 20px;
    align-self: center;
`;

export const Input = styled.TextInput`
    width: 100%;
    border: 1px solid #1C6119;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 10px;
    font-family: 'Lexend_300Light';
    font-size: 16px;
    color: #707070;
`

export const TextLink = styled.Text`
    font-size: 15px;
    font-family: 'Lexend_300Light';
    text-decoration: underline;
    align-self: flex-start;
    margin-bottom: 10px;
    color: #707070;
`

export const BotaoEnviar = styled.TouchableOpacity`
    background-color: #56AB2F;
    width: 100%;
    padding: 6px;
    box-shadow: 2px 2px #1C6119;
    border-radius: 10px;
    align-self: center;
`

export const TextoBotao = styled.Text`
    font-size: 20px;
    text-align: center;
    font-family: 'Lexend_300Light';
    color: #FFF;
`

export const ContainerTextEmp = styled.View`
    flex: 0.6;
    width: 100%;
    justify-content: flex-end;
    text-align: center;
`

export const TextoEmpresa = styled.Image`
    width: 112px;
    height: 40px;
    align-self: center;
    
`

export const ContainerGoogle = styled.View`
    flex: 2;
    justify-content: center;
    align-items: center;
    text-align: center;  
`

export const TextGoogle = styled.Text`
    font-size: 22px;
    font-family: 'Lexend_300Light';
    margin-bottom: 10px;
`

export const BtnGoogle = styled.TouchableOpacity`
    width: 75px;
    height: 75px;
    background-color: #E2E2E2;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    margin-bottom: 10px;
` 

export const IconGoogle = styled.Image`
   width: 65px;
   height: 65px;
`

export const CheckboxContainer = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 8px;
`

export const TextoCheckbox = styled.Text`
    font-size: 15px;
    font-family: 'Lexend_300Light';
    color: #7A7A7A;
`
    
