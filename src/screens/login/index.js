import React, { useState } from 'react';
import Checkbox from 'expo-checkbox';
import { Keyboard } from 'react-native';

import { 
  Titulo, Input, BotaoEnviar,
  TextoBotao, TextLink, ImgEmpresa, 
  ContainerTextEmp, ContainerForm, ContainerLogo,
  Container, ContainerGoogle, BtnGoogle, TextGoogle,
  IconGoogle, CheckboxContainer, TextoCheckbox, DismissKeyboard
} from './styles';

import LogoLogin from '../../components/logo-login';

export default function Login({navigation}) {
  const [senha, setSenha]= useState('');
  const [hidePass, setHidepass]= useState(false);

  return (
    <DismissKeyboard onPress={()=> Keyboard.dismiss()}>
      <Container>
        <ContainerLogo>
            <LogoLogin />
        </ContainerLogo>  

        <ContainerForm> 
          <Titulo>Login</Titulo>
              
          <Input placeholder="E-Mail"/>
          <Input 
            value={senha} 
            onChangeText={(senha)=> {setSenha(senha) }} 
            secureTextEntry={(!hidePass)} 
            placeholder="Senha"
          />
          
          <CheckboxContainer>
            <Checkbox
              style={{width: 17, height: 17}}
              value={hidePass}
              onValueChange={setHidepass }
            />
            <TextoCheckbox> Mostrar senha </TextoCheckbox>
          </CheckboxContainer>

          <TextLink>Esqueci minha senha</TextLink>
              
          <BotaoEnviar>
            <TextoBotao> Entrar </TextoBotao>
          </BotaoEnviar>
        </ContainerForm>

        <ContainerGoogle>
          <TextGoogle>Entrar com:</TextGoogle>

          <BtnGoogle>
            <IconGoogle 
              source={require('../../../assets/imgs/icon-google-1.png')}  
            />
          </BtnGoogle>

          <TextLink onPress={()=> {navigation.navigate('Cadastro')}}>
            Não possui uma conta? Cadastre-se
          </TextLink>
        </ContainerGoogle>

        <ContainerTextEmp>
          <ImgEmpresa source={require('../../../assets/imgs/slogan.png')}/>
        </ContainerTextEmp>

      </Container>
    </DismissKeyboard>
  );
}