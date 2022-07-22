import React, { useState } from 'react';
import Checkbox from 'expo-checkbox';
import { Keyboard } from 'react-native';

import { 
  Titulo, Input, BotaoEnviar,
  TextoBotao, TextLink, TextoEmpresa, 
  ContainerTextEmp, ContainerForm, ContainerLogo,
  Container, ContainerGoogle, BtnGoogle, TextGoogle,
  IconGoogle, CheckboxContainer, TextoCheckbox, DismissKeyboard
} from './styles';

import LogoLogin from '../../components/logo-login';
import { useFonts, Lexend_300Light } from '@expo-google-fonts/lexend';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import { Jura_400Regular } from '@expo-google-fonts/jura';
import AppLoading from 'expo-app-loading';

export default function Login({navigation}) {
  const [senha, setSenha]= useState('');
  const [hidePass, setHidepass]= useState(false);

  const [ fontsLoaded]  = useFonts({
    Jura_400Regular,
    Lexend_300Light,
    Roboto_400Regular,
    'agency_fb':require('../../../assets/fonts/agency_fb.ttf')
  })
  
  if (!fontsLoaded){
    <AppLoading />
  }

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
          <TextoEmpresa source={require('../../../assets/imgs/slogan.png')}/>
        </ContainerTextEmp>

      </Container>
    </DismissKeyboard>
  );
}