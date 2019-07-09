import React, { Component } from 'react';

import api from '../../services/api';

import {
  View,
  Text,
  FlatList
} from 'react-native';

import {
  Container,
  RegistryCreatedAt,
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
    <RegistryCreatedAt>
      {item.createdAt}
    </RegistryCreatedAt>
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
