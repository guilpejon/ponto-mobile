import { createStackNavigator, createAppContainer } from 'react-navigation';

import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import Main from './pages/main';
import Registry from './pages/registry';
import Camera from './pages/camera';

import React from 'react';
import {
  Button
} from 'react-native';

const Routes = createStackNavigator(
  {
    SignIn,
    SignUp,
    Camera,
    Registry,
    Main: {
      screen: Main,
      navigationOptions: ({ navigation }) => ({
        headerRight: (
          <Button
            onPress={() => navigation.navigate('Camera')}
            title='Novo Ponto'
          />
        )
      })
    }
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#da552f',
      },
      headerTintColor: '#fff',
    },
  }
);

const AppContainer = createAppContainer(Routes);

export default AppContainer;
