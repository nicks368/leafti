import React from 'react';
import { BtnPag, Container } from './styles';

export default function Home({navigation}) {
  return (
    <Container>
      <BtnPag onPress={() => navigation.navigate('login')}> Profile </BtnPag>

    </Container>
  );
}

Home.navigationOptions = {
  title: 'home',
}