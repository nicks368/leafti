import React from 'react';

import { 
  Titulo, KeyView, BotaoEnviar, InputEmailSenha,
  TextoBotao, TextLink, TextoEmpresa, ContainerLogo,
  ContainerTextEmp, ContainerForm, InputNomeSobrenome, 
  ContainerNome,
  ContainerCelular,
  InputDdd,
  InputCelular,
} from './styles';

import LogoCadastro from '../../components/logo-cadastro';
import { useFonts, Lexend_300Light } from '@expo-google-fonts/lexend';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import { Jura_400Regular } from '@expo-google-fonts/jura';
import AppLoading from 'expo-app-loading';

export default function Cadastro() {
  const [ fontsLoaded]  = useFonts({
    Jura_400Regular,
    Lexend_300Light,
    Roboto_400Regular,
    'agency_fb':require('../../../assets/fonts/agency_fb.ttf')
  })

  //Carrega as fontes antes de iniciar a pagina
  if (!fontsLoaded){
    <AppLoading />
  }

  return (
    <KeyView>
      <ContainerLogo>
        <LogoCadastro/>
      </ContainerLogo>
      
      <ContainerForm> 
        <Titulo>Cadastro</Titulo>
        
        <ContainerNome>
          <InputNomeSobrenome placeholder="Nome"/>
          <InputNomeSobrenome placeholder="Sobrenome"/>
        </ContainerNome>
        
        <InputEmailSenha placeholder="E-mail"/>

        <ContainerCelular>
          <InputDdd placeholder="DDD" keyboardType="numeric" maxLength={2}/>
          <InputCelular placeholder="Celular" keyboardType="numeric" maxLength={9} />
        </ContainerCelular>
        
        <InputEmailSenha secureTextEntry="true" placeholder="Senha"/>
        <InputEmailSenha secureTextEntry="true" placeholder="Confirmar Senha"/>
        
        <BotaoEnviar>
         <TextoBotao> Cadastrar </TextoBotao>
        </BotaoEnviar>
      </ContainerForm>

      <ContainerTextEmp> 
        <TextLink> Ja possui uma conta?</TextLink>
        <TextoEmpresa source={require('../../../assets/imgs/slogan.svg')}/>
      </ContainerTextEmp>
      
    </KeyView>
  );
}