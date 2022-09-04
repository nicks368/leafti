import React, {useEffect, useState} from 'react';
import { Container, ContainerPerfil, ContainerSair, FotoPerfil, NomePerfil, TextoSair } from './styles.js';

import TopPerfilNavigator from '../../routes/top.perfil.routes.js';

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
        <FotoPerfil source={(profile.picture? {uri: profile.picture} : require('../../../assets/imgs/perfildefault.jpg'))}/>
        <NomePerfil>{ (profile.name? profile.name : 'xxxxxxxx')} </NomePerfil> 
        <ContainerSair onPress={()=> {navigation.navigate('Login')}}>
          <Feather name="log-out" style={{fontSize: 16}} color="#535353" />
          <TextoSair>Sair</TextoSair>
        </ContainerSair>
      </ContainerPerfil>

      <TopPerfilNavigator />

    </Container>
  );
}


