import React, {useEffect, useState} from 'react';
import { BtnOpcao, Container, ContainerBotoes, ContainerPerfil, FotoPerfil, NomePerfil, TextBtn } from './styles.js';

import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import { Ionicons, Entypo, AntDesign, Feather } from '@expo/vector-icons';

type Params = {
  token: string;
}

type Profile = {
  name: string;
  email: string;
  given_name: string;
  family_name: string;
  picture: string;
}

export default function Profile({navigation, route}) {
  const [profile, setProfile] = useState({} as Profile);
  
  // const { token } = route.params as Params;
 
  async function loadProfile(){
   
    const response = await fetch(`https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${token}`);
    const userInfo = await response.json();
      
    setProfile(userInfo);
   
  }

  useEffect(() =>{
    loadProfile();
  }, []);

  const [fontsLoaded] = useFonts({ 
    Roboto_400Regular,
    Roboto_500Medium
  });

  //Carrega as fontes antes de iniciar a pagina
  if (!fontsLoaded){
    return <AppLoading />
  }

  
  return ( 
    <Container>
      <ContainerPerfil>
        <FotoPerfil source={{uri: profile.picture}}/>
        <NomePerfil> {profile.name} </NomePerfil>
      </ContainerPerfil>

      <ContainerBotoes>
        <BtnOpcao style={{borderLeftWidth: 2, borderLeftColor: '#56AB2F'}}>
          <Ionicons 
            name="settings-outline" 
            style={{fontSize: 30}} 
            color="#56AB2F" 
          />
          <TextBtn> Configurações</TextBtn> 
        </BtnOpcao>

        <BtnOpcao style={{borderLeftWidth: 2, borderLeftColor: '#56AB2F'}}>
          <Entypo name="sound-mix" style={{fontSize: 30}} color="#56AB2F" />
          <TextBtn> Preferências</TextBtn> 
        </BtnOpcao>

        <BtnOpcao style={{borderLeftWidth: 2, borderLeftColor: '#56AB2F'}}>
          <AntDesign name="lock1" style={{fontSize: 30}} color="#56AB2F" />
          <TextBtn> Privacidade</TextBtn> 
        </BtnOpcao>

        <BtnOpcao style={{borderLeftWidth: 2, borderLeftColor: '#56AB2F'}}>
          <AntDesign name="questioncircleo" style={{fontSize: 30}} color="#56AB2F" />
          <TextBtn> Acessibilidade</TextBtn> 
        </BtnOpcao>

        <BtnOpcao 
          style={{borderLeftWidth: 2, borderLeftColor: '#56AB2F'}} 
          onPress={()=> {navigation.navigate('Login')}}
        >
        <Feather name="log-in" style={{fontSize: 30}} color="#56AB2F" />
          <TextBtn> Sair</TextBtn> 
        </BtnOpcao>
      </ContainerBotoes>
    </Container>
  );
}


