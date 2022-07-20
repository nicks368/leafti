import React from 'react';
import { BtnOpcao, Container, ContainerBotoes, ContainerPerfil, FotoPerfil, NomePerfil, TextBtn } from './styles';
import { StyleSheet } from 'react-native';

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
        <BtnOpcao style={styles.shadow}>
          <Ionicons 
            name="settings-outline" 
            style={{fontSize: 30}} 
            color="#56AB2F" 
          />
          <TextBtn> Configurações</TextBtn> 
        </BtnOpcao>

        <BtnOpcao style={styles.shadow}>
          <Entypo name="sound-mix" style={{fontSize: 30}} color="#56AB2F" />
          <TextBtn> Preferências</TextBtn> 
        </BtnOpcao>

        <BtnOpcao style={styles.shadow}>
          <AntDesign name="lock1" style={{fontSize: 30}} color="#56AB2F" />
          <TextBtn> Privacidade</TextBtn> 
        </BtnOpcao>

        <BtnOpcao style={styles.shadow}>
          <AntDesign name="questioncircleo" style={{fontSize: 30}} color="#56AB2F" />
          <TextBtn> Acessibilidade</TextBtn> 
        </BtnOpcao>

        <BtnOpcao style={styles.shadow} onPress={()=> {navigation.navigate('Login')}}>
        <Feather name="log-in" style={{fontSize: 30}} color="#56AB2F" />
          <TextBtn> Sair</TextBtn> 
        </BtnOpcao>
      </ContainerBotoes>
    </Container>
  );
}

const styles = new StyleSheet.create({
  shadow:{
    borderLeftColor: '#298100',
    borderLeftWidth: 2,
  }

})
