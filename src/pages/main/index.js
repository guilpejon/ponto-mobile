import React, { Component } from 'react';
import { ScrollView, RefreshControl } from 'react-native';

import api from '../../services/api';

import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  Button
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
    registries: [],
    refreshing: true
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

    this.setState({ registries, refreshing: false });
  };

  onRefresh() {
    //Clear old data of the list
    this.setState({ registries: [] });
    //Call the Service to get the latest data
    this.loadRegistries();
  }

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
    if (this.state.refreshing) {
      return (
        //loading view while data is loading
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return(
      <Container>
        <FlatList
          data={this.state.registries}
          keyExtractor={item => item.id}
          renderItem={this.renderItem}
          refreshControl={
            <RefreshControl
              //refresh control used for the Pull to Refresh
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh.bind(this)}
            />
          }
        />
      </Container>
    );
  }
}
