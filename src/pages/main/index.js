import React, { Component } from 'react';
import { ScrollView, RefreshControl } from 'react-native';

import api from '../../services/api';

import {
  View,
  Text,
  TouchableOpacity,
  Image,
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
    registriesInfo: {},
    refreshing: true,
    page: 1
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

  groupBy = key => array =>
    array.reduce((objectsByKeyValue, obj) => {
      const value = obj[key].split(' ')[0];
      objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
      return objectsByKeyValue;
    }, {});

  loadRegistries = async (page = 1) => {
    try {
      const response = await api.get(`/registries?page=${page}`);

      const { docs: registries, ...registriesInfo } = response.data;

      // const groupByCreatedAt = this.groupBy('createdAt');
      // const grouped = groupByCreatedAt(registries);
      // let entries = Object.entries(grouped)

      this.setState({
        registries: [...this.state.registries, ...registries],
        registriesInfo,
        page,
        refreshing: false
      });
    } catch(exception) {
      console.log(exception)
    }
  };

  onRefresh() {
    //Clear old data of the list
    this.setState({ registries: [] });
    //Call the Service to get the latest data
    this.loadRegistries();
  }

  renderItem = ({ item }) => (
    <RegistryContainer onPress={() => this.props.navigation.navigate('Registry', { registry: item })}>
      <RegistryCreatedAt>{item.createdAt.replace(',','').replace(' ', ' - ')}</RegistryCreatedAt>
    </RegistryContainer>
  );

  loadMore = () => {
    const { page, registriesInfo } = this.state;

    if (page === registriesInfo.page) return;

    const pageNumber = page + 1;

    this.loadRegistries(pageNumber);
  };

  render() {
    if (this.state.refreshing) {
      return (
        //loading view while data is loading
        <View style={{ flex: 1, paddingTop: 30 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return(
      <Container>
        <List
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
          onEndReached={this.loadMore}
          onEndReachedThreshold={0.1}
        />
      </Container>
    );
  }
}
