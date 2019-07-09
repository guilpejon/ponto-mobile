import React from 'react'

import {
  Text ,
  View
} from 'react-native'

import {
  Container,
  Image
} from './styles'

const Registry = ({ navigation }) => (
  <Container>
    <Image source={{uri: navigation.state.params.registry.image}} />
  </Container>
);

Registry.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.registry.createdAt
});

export default Registry;
