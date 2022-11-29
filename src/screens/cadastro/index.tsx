import React, { useState}  from 'react';
import Checkbox from 'expo-checkbox';
import * as AuthSession from 'expo-auth-session';

import { 
  Titulo, KeyView, BotaoEnviar, InputEmailSenha,
  TextoBotao, TextLink, TextoEmpresa, ContainerLogo,
  ContainerTextEmp, ContainerForm, InputNomeSobrenome, 
  ContainerNome, ContainerCelular, InputDdd, InputCelular,
  Container, ContainerGoogle, TextGoogle, BtnGoogle, IconGoogle,
  CheckboxContainer, TextoCheckbox, DismissKeyboard
} from './styles';

import LogoCadastro from '../../components/logo-cadastro';
import { Keyboard } from 'react-native';

type AuthResponse = {
  type: string;
  params: {
    access_token: string;
  }
}
  

export default function Cadastro({navigation}) {
  
  async function handleSignIn() {
    try{
      const CLIENT_ID = '235483201751-qkvaou91qg2i5hbc0ba4ggvv087rd2j9.apps.googleusercontent.com';
      const REDIRECT_URI = 'https://auth.expo.io/@nicks368/leafti';
      const RESPONSE_TYPE = 'token';
      const SCOPE = encodeURIComponent('profile email');
      
      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
      
      const {type, params} = await AuthSession.startAsync({authUrl}) as AuthResponse;
      
      if (type == 'success'){
        navigation.navigate('Profile', {token: params.access_token}); //adicionar o ? antes do params
      }
  
      
    } catch(error) {
        console.log(error);
    }
  }
  
  const [senha, setSenha]= useState('');
  const [confSenha, setConfSenha]= useState('');
  const [hidePass, setHidepass]= useState(false);

  return (
    <DismissKeyboard onPress={() =>Keyboard.dismiss()}>
    <Container> 
      <ContainerLogo>
        <LogoCadastro/>
      </ContainerLogo>

      <KeyView>      
        <ContainerForm> 
          <Titulo>Cadastro</Titulo>
          
          <ContainerNome>
            <InputNomeSobrenome placeholder="Nome"/>
            <InputNomeSobrenome placeholder="Sobrenome"/>
          </ContainerNome>
          
          <InputEmailSenha placeholder="E-Mail"/>

          <ContainerCelular>
            <InputDdd placeholder="DDD" keyboardType="numeric" maxLength={2}/>
            <InputCelular placeholder="Celular" keyboardType="numeric" maxLength={9} />
          </ContainerCelular>
          
          <InputEmailSenha 
              secureTextEntry={(!hidePass)} 
              placeholder="Senha"
              value={senha} 
              onChangeText={(senha)=> {setSenha(senha) }} 
            />
            <InputEmailSenha 
              secureTextEntry={(!hidePass)} 
              placeholder="Confirmar Senha"
              value={confSenha} 
              onChangeText={(confSenha)=> {setConfSenha(confSenha) }} 
            />

            <CheckboxContainer>
              <Checkbox
                style={{width: 17, height: 17, marginLeft: 5}}
                value={hidePass}
                onValueChange={setHidepass }
              />
              <TextoCheckbox> Mostrar senha </TextoCheckbox>
            </CheckboxContainer>

          <BotaoEnviar>
            <TextoBotao> Cadastrar </TextoBotao>
          </BotaoEnviar>

        </ContainerForm>
      </KeyView>

      <ContainerGoogle>
        <TextGoogle>Cadastre-se com:</TextGoogle>

        <BtnGoogle onPress={handleSignIn}>
          <IconGoogle 
            source={require('../../../assets/imgs/icon-google-1.png')}  
          />
        </BtnGoogle>

        <TextLink style={{fontSize: 14}} onPress={() => navigation.navigate('Login')}>Já possui uma conta?</TextLink>
      </ContainerGoogle>

      <ContainerTextEmp> 
        <TextoEmpresa source={require('../../../assets/imgs/Slogan.png')}/>
      </ContainerTextEmp>
      
    </Container>
    </DismissKeyboard>
  );
}

