import React, { Component } from 'react';
import { RefreshControl } from 'react-native';

import api from '../../services/api';

import {
  Text ,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Image
} from 'react-native'

import {
  Container,
  RegistryImage,
  DeleteButton,
  DeleteButtonText
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
      console.log(exception)
    }
  };

  componentDidMount() {
    this.loadRegistry(this.props.navigation.state.params.registry);
  }

  deleteRegistry = async () => {
    try {
      const response = await api.delete(`/registries/${this.state.registry.id}`);
      if (response.status === 204) {
        this.props.navigation.navigate('Main')
      }
    } catch(exception) {
      console.log(exception)
    }
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
        <RegistryImage
        source={{uri: this.state.registry.image}}
        resizeMode="contain"
        />
        <DeleteButton
          onPress={() => {
            this.deleteRegistry()
          }}
        >
          <DeleteButtonText>Apagar Registro</DeleteButtonText>
        </DeleteButton>
      </Container>
    );
  }
}

Registry.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.registry.createdAt,
  headerStyle: {
    backgroundColor: '#FC6663',
  },
  // headerRight: (
  //   <TouchableOpacity onPress={() => this.deleteRegistry()}
  //   style={{right: '25%', backgroundColor: 'transparent', paddingLeft: 15}}
  //   >
  //     <Image style={{width: 25, height: 25}} source={require('../../images/icons/trash.png')}/>
  //   </TouchableOpacity>
  // ),
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
});
