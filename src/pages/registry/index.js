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
  <Image
    source={{uri: navigation.state.params.registry.image}}
    resizeMode="contain"
  />
  </Container>
);

Registry.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.registry.createdAt,
  headerStyle: {
    backgroundColor: '#FC6663',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
});

export default Registry;
