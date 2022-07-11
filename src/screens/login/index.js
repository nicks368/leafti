import React from 'react';

import { 
  Titulo, KeyView, Input, BotaoEnviar,
  TextoBotao, TextLink, TextoEmpresa, 
  ContainerTextEmp, ContainerForm, ContainerLogo
} from './styles';

import LogoLogin from '../../components/logo-login';
import { useFonts, Lexend_300Light } from '@expo-google-fonts/lexend';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import { Jura_400Regular } from '@expo-google-fonts/jura';
import AppLoading from 'expo-app-loading';

export default function Login({navigation}) {

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
  <KeyView>
    <ContainerLogo>
      <LogoLogin />
    </ContainerLogo>   

    <ContainerForm> 
      <Titulo>Login</Titulo>
        
      <Input placeholder="E-mail"/>
      <Input secureTextEntry="true" placeholder="Senha"/>
      <TextLink> Esqueci minha senha</TextLink>
        
      <BotaoEnviar>
       <TextoBotao> Entrar </TextoBotao>
       </BotaoEnviar>
      </ContainerForm>

      <ContainerTextEmp> 
        <TextLink onPress={()=> {navigation.navigate('Cadastro')}}> Não possui uma conta? Cadastre-se</TextLink>
        <TextoEmpresa source={require('../../../assets/imgs/slogan.svg')}/>
      </ContainerTextEmp>
      
   </KeyView>

  );
};