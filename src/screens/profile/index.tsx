import React, {useEffect, useState} from 'react';
import { BtnOpcao, Container, ContainerBotoes, ContainerPerfil, FotoPerfil, NomePerfil, TextBtn } from './styles.js';

import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import TopPerfilNavigator from '../../routes/top.perfil.routes.js';

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
 
  // async function loadProfile(){
   
  //   const response = await fetch(`https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${token}`);
  //   const userInfo = await response.json();
      
  //   setProfile(userInfo);
   
  // }

  // useEffect(() =>{
  //   loadProfile();
  // }, []);

  const [fontsLoaded] = useFonts({ 
    Roboto_400Regular,
    Roboto_500Medium
  });

  //Carrega as fontes antes de iniciar a pagina
  if (!fontsLoaded){
    return <AppLoading />
  }

  //{uri: profile.picture, profile.name}


  return ( 
    <Container>
      <ContainerPerfil>
        <FotoPerfil source={ require('../../../assets/imgs/perfildefault.jpg')}/>
        <NomePerfil> xxxxxxxxx </NomePerfil> 
      </ContainerPerfil>

      <TopPerfilNavigator />

    </Container>
  );
}


