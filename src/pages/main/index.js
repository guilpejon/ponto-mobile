import React, { Component } from 'react';

import api from '../../services/api';

import {
  View,
  Text,
  TouchableOpacity,
  FlatList
} from 'react-native';

import {
  Container,
  RegistryCreatedAt,
  RegistryButton,
  RegistryButtonText,
  RegistryContainer,
  List
} from './styles'

export default class Main extends Component {
  state = {
    registries: []
  }

  static navigationOptions = {
    title: 'PontoApp',
  };

  componentDidMount() {
    this.loadRegistries();
  }

  loadRegistries = async (page = 1) => {
    const response = await api.get(`/registries?page=${page}`);

    const registries = response.data;

    this.setState({ registries });
  };

  renderItem = ({ item }) => (
    <RegistryContainer>
      <RegistryCreatedAt>{item.createdAt}</RegistryCreatedAt>
      <RegistryButton
        onPress={() => {
          this.props.navigation.navigate('Registry', { registry: item });
        }}
      >
        <RegistryButtonText>Acessar</RegistryButtonText>
      </RegistryButton>
    </RegistryContainer>
  );

  render() {
    return(
      <Container>
        <List
          data={this.state.registries}
          keyExtractor={item => item.id}
          renderItem={this.renderItem}
        />
      </Container>
    );
  }
}
