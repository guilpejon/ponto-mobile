import { createStackNavigator, createAppContainer } from 'react-navigation';

import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import Main from './pages/main';
import Registry from './pages/registry';
import RegistryReview from './pages/registryReview';
import Camera from './pages/camera';

import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

const Routes = createStackNavigator(
  {
    SignIn,
    SignUp,
    Camera,
    Registry,
    RegistryReview,
    Main: {
      screen: Main,
      navigationOptions: ({ navigation }) => ({
        headerRight: (
          <TouchableOpacity onPress={() => navigation.navigate('Camera')}
            style={{right: '25%', backgroundColor: 'transparent', paddingLeft: 15}}
          >
            <Image style={{width: 25, height: 25}} source={require('./images/icons/camera.png')}/>
          </TouchableOpacity>
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
