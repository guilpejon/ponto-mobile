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
  Image,
  RegistryDate,
  RegistryButton,
  RegistryButtonText
} from './styles'

export default class RegistryReview extends Component {
  state = {
    registry: '',
    refreshing: true
  }

  loadRegistry = async (image) => {
    try {
      let response = await api.post('/registries/rekognition', { image });

      let registry = {
        image: 'data:image/jpeg;base64,' + response.data.image,
        date: response.data.date
      }

      this.setState({ refreshing: false, registry });
    } catch(exception) {
      console.log(exception)
      this.props.navigation.navigate('Camera');
    }
  };

  createRegistry = async (base64Image, date) => {
    this.setState({ refreshing: true });
    try {
      const response = await api.post('/registries', {
        image: base64Image,
        date
      });

      if (response.status === 200) {
        this.props.navigation.navigate('Main');
      } else {
        console.log(response)
        this.setState({ refreshing: false });
      }
    } catch(exception) {
      console.log(exception)
      this.setState({ refreshing: false });
    }
  }

  componentDidMount() {
    this.loadRegistry(this.props.navigation.state.params.image);
  }

  render() {
    if (this.state.refreshing) {
      return (
        //loading view while data is loading
        <View style={{ flex: 1, paddingTop: 30 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <Container>
        <RegistryDate>{this.state.registry.date.replace(',', '').replace(' ', ' - ')}</RegistryDate>
        <Image
          source={{uri: this.state.registry.image}}
          resizeMode="contain"
        />
        <RegistryButton
          onPress={() => {
            this.createRegistry(
              this.state.registry.image,
              this.state.registry.date
            )
          }}
        >
          <RegistryButtonText>Confirmar Registro</RegistryButtonText>
        </RegistryButton>
      </Container>
    );
  }
}
