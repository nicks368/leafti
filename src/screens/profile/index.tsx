import React, {useEffect, useState} from 'react';
import { Botao, Container, ContainerBotoes, ContainerConfig, ContainerPerfil,
ContainerSair, FotoPerfil, NomePerfil, TextoBotao, TextoRow, TextoSair, Titulo,
TituloRow } from './styles.js';

import { Feather } from '@expo/vector-icons';

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

      var { token } = route.params as Params;
 
      async function loadProfile(){
      
      const response = await fetch(`https:www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${token}`);
      const userInfo = await response.json();
      
      setProfile(userInfo);
     }

     useEffect(() =>{
       loadProfile();
     }, []);


     // require('../../../assets/imgs/perfildefault.jpg')

  return ( 
    <Container>
      <ContainerPerfil>
        <FotoPerfil source={{uri: profile.picture}}/>
        <NomePerfil>{profile.given_name} </NomePerfil> 
        <ContainerSair onPress={()=> {navigation.navigate('Login')}}>
          <Feather name="log-out" style={{fontSize: 16}} color="#535353" />
          <TextoSair>Sair</TextoSair>
        </ContainerSair>
      </ContainerPerfil>

      <ContainerConfig>
        <Titulo>Configurações</Titulo>

        <ContainerBotoes>
          <TituloRow>Nome:</TituloRow>
          <TextoRow>{profile.given_name}</TextoRow>
        </ContainerBotoes>

        <ContainerBotoes>
          <TituloRow>Sobrenome:</TituloRow>
          <TextoRow>{profile.family_name}</TextoRow>
        </ContainerBotoes>

        <ContainerBotoes>
          <TituloRow>E-mail:</TituloRow>
          <TextoRow>{profile.email}</TextoRow>
        </ContainerBotoes>

        <Botao onPress={()=> {navigation.navigate('Termos')}}>
          <TextoBotao>Termos de Uso</TextoBotao>
        </Botao>
      </ContainerConfig>
    </Container>
  );
}


