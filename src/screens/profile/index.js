import React from 'react';
import { BtnOpcao, Container, ContainerBotoes, ContainerPerfil, FotoPerfil, NomePerfil, TextBtn } from './styles';

import { useFonts, Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';

import { Ionicons, Entypo, AntDesign, Feather } from '@expo/vector-icons';

export default function Profile({navigation}) {
  
  const [ fontsLoaded]  = useFonts({ 
    Roboto_400Regular,
    Roboto_500Medium
  })

  //Carrega as fontes antes de iniciar a pagina
  if (!fontsLoaded){
    <AppLoading />
  }

  return ( 
    <Container>
      <ContainerPerfil>
        <FotoPerfil source={require('../../../assets/imgs/perfildefault.jpg')}/>
        <NomePerfil>Nome </NomePerfil>
      </ContainerPerfil>

      <ContainerBotoes>
        <BtnOpcao>
          <Ionicons name="settings-outline" size={32} color="#56AB2F" />
          <TextBtn> Configuração</TextBtn> 
        </BtnOpcao>

        <BtnOpcao>
          <Entypo name="sound-mix" size={32} color="#56AB2F" />
          <TextBtn> Preferencias</TextBtn> 
        </BtnOpcao>

        <BtnOpcao>
          <AntDesign name="lock1" size={32} color="#56AB2F" />
          <TextBtn> Privacidade</TextBtn> 
        </BtnOpcao>

        <BtnOpcao>
          <AntDesign name="questioncircleo" size={32} color="#56AB2F" />
          <TextBtn> Acessibilidade</TextBtn> 
        </BtnOpcao>

        <BtnOpcao onPress={()=> {navigation.navigate('Login')}}>
        <Feather name="log-in" size={32} color="#56AB2F" />
          <TextBtn> Sair</TextBtn> 
        </BtnOpcao>
      </ContainerBotoes>
    </Container>
  );
}