import React, { Component } from 'react';

import api from '../../services/api';

import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Button
} from 'react-native';

import {
  Container,
  RegistryCreatedAt,
  RegistryButton,
  RegistryButtonText,
  RegistryContainer,
  HeaderButton,
  List
} from './styles'

export default class Main extends Component {
  state = {
    registries: []
  }

  static navigationOptions = {
    title: 'PontoApp',
    headerStyle: {
      backgroundColor: '#FC6663',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
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
        <RegistryButtonText>Visualizar</RegistryButtonText>
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
