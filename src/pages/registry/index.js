import React, { Component } from 'react';
import { RefreshControl } from 'react-native';

import api from '../../services/api';

import {
  Text ,
  View,
  ActivityIndicator
} from 'react-native'

import {
  Container,
  Image
} from './styles'

export default class Registry extends Component {
  state = {
    registry: '',
    refreshing: true
  }

  loadRegistry = async (registry) => {
    try {
      const response = await api.get(`/registries/${registry.id}`);

      registry = response.data;

      this.setState({ registry, refreshing: false });
    } catch(exception) {

    }
  };

  componentDidMount() {
    this.loadRegistry(this.props.navigation.state.params.registry);
  }

  render() {
    if (this.state.refreshing) {
      return (
        //loading view while data is loading
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <Container>
        <Image
        source={{uri: this.state.registry.image}}
        resizeMode="contain"
        />
      </Container>
    );
  }
}

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
