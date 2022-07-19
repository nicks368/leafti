import React, { useState } from 'react';
import { CheckBox, StyleSheet } from 'react-native';

import { 
  Titulo, KeyView, Input, BotaoEnviar,
  TextoBotao, TextLink, TextoEmpresa, 
  ContainerTextEmp, ContainerForm, ContainerLogo,
  Container, ContainerGoogle, BtnGoogle, TextGoogle,
  IconGoogle, CheckboxContainer, TextoCheckbox
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
  <KeyView>
    <ContainerLogo>
      <LogoLogin />
    </ContainerLogo>   

    <ContainerForm> 
      <Titulo>Login</Titulo>
        
      <Input placeholder="E-mail"/>
      <Input 
        value={senha} 
        onChangeText={(senha)=> {setSenha(senha) }} 
        secureTextEntry={(!hidePass)} 
        placeholder="Senha"
      />

      <CheckboxContainer>
          <CheckBox
            value={hidePass}
            onValueChange={setHidepass }
          />
          <TextoCheckbox> Mostrar senha </TextoCheckbox>
        </CheckboxContainer>

      <TextLink> Esqueci minha senha</TextLink>
        
      <BotaoEnviar>
       <TextoBotao> Entrar </TextoBotao>
       </BotaoEnviar>
      </ContainerForm>

      <ContainerGoogle>
        <TextGoogle>Entrar com:</TextGoogle>

        <BtnGoogle>
          <IconGoogle 
            source={require('../../../assets/imgs/icon-google-1.svg')}  
          />
        </BtnGoogle>

        <TextLink onPress={()=> {navigation.navigate('Cadastro')}}>
          Não possui uma conta? Cadastre-se
        </TextLink>
      </ContainerGoogle>

      <ContainerTextEmp>
        <TextoEmpresa source={require('../../../assets/imgs/slogan.svg')}/>
      </ContainerTextEmp>
      
   </KeyView>

  );
};