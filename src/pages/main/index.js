import React, { Component } from 'react';

import {
  View ,
  Text
} from 'react-native';

import {
  Container
} from './styles'

export default class Main extends Component {
  render() {
    return(
      <Container>
        <Text>Hello, World!</Text>
        <View />
      </Container>
    );
  }
}
