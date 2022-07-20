import React, { useState}  from 'react';
import Checkbox from 'expo-checkbox';

import { 
  Titulo, KeyView, BotaoEnviar, InputEmailSenha,
  TextoBotao, TextLink, TextoEmpresa, ContainerLogo,
  ContainerTextEmp, ContainerForm, InputNomeSobrenome, 
  ContainerNome, ContainerCelular, InputDdd, InputCelular,
  Container, ContainerGoogle, TextGoogle, BtnGoogle, IconGoogle,
  CheckboxContainer, TextoCheckbox, DismissKeyboard
} from './styles';

import LogoCadastro from '../../components/logo-cadastro';
import { useFonts, Lexend_300Light } from '@expo-google-fonts/lexend';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import { Jura_400Regular } from '@expo-google-fonts/jura';
import AppLoading from 'expo-app-loading';
import { Keyboard } from 'react-native';

export default function Cadastro({navigation}) {
  const [senha, setSenha]= useState('');
  const [confSenha, setConfSenha]= useState('');
  const [hidePass, setHidepass]= useState(false);
  
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
          
          <InputEmailSenha placeholder="E-mail"/>

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
                style={{width: 15, height: 15, marginLeft: 5, }}
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
        <TextGoogle>Cadastrar com:</TextGoogle>

        <BtnGoogle>
          <IconGoogle 
            source={require('../../../assets/imgs/icon-google-1.svg')}  
          />
        </BtnGoogle>

        <TextLink onPress={() => navigation.goBack()}> Ja possui uma conta?</TextLink>
      </ContainerGoogle>

      <ContainerTextEmp> 
        <TextoEmpresa source={require('../../../assets/imgs/slogan.svg')}/>
      </ContainerTextEmp>
      
    </Container>
    </DismissKeyboard>
  );
}

