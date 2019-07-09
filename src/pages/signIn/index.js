import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StatusBar, AsyncStorage } from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
import { StackActions, NavigationActions } from 'react-navigation';

import api from '../../services/api';

import {
  Container,
  Logo,
  Input,
  ErrorMessage,
  Button,
  ButtonText,
  SignUpLink,
  SignUpLinkText,
} from './styles';

export default class SignIn extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
      dispatch: PropTypes.func,
    }).isRequired,
  };

  state = { username: 'guil', password: '123456', error: '' };

  handleUsernameChange = username => {
    this.setState({ username });
  };

  handlePasswordChange = password => {
    this.setState({ password });
  };

  handleCreateAccountPress = () => {
    this.props.navigation.navigate('SignUp');
  };

  handleSignInPress = async () => {
    if (this.state.username.length === 0 || this.state.password.length === 0) {
      this.setState(
        { error: 'Preencha usuário e senha para continuar!' },
        () => false
      );
    } else {
      try {
        const response = await api.post('/login', {
          username: this.state.username,
          password: this.state.password,
        });

        await AsyncStorage.setItem('@PontoApp:token', response.data.token);

        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'Main' })],
        });
        this.props.navigation.dispatch(resetAction);
      } catch (err) {
        console.log(err)
        this.setState({
          error: 'Houve um problema com o login, verifique suas credenciais!'
        });
      }
    }
  };

  render() {
    return (
      <Container>
        <StatusBar hidden />
        <Logo source={require('../../images/logo.jpg')} resizeMode="contain" />
        <Input
          placeholder="Nome de usuário"
          value={this.state.username}
          onChangeText={this.handleUsernameChange}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Input
          placeholder="Senha"
          value={this.state.password}
          onChangeText={this.handlePasswordChange}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
        />
        {this.state.error.length !== 0 && (
          <ErrorMessage>{this.state.error}</ErrorMessage>
        )}
        <Button onPress={this.handleSignInPress}>
          <ButtonText>Entrar</ButtonText>
        </Button>
        <SignUpLink onPress={this.handleCreateAccountPress}>
          <SignUpLinkText>Criar conta grátis</SignUpLinkText>
        </SignUpLink>
      </Container>
    );
  }
}
