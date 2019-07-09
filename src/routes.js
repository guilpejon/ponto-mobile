import { createStackNavigator, createAppContainer } from 'react-navigation';

import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import Main from './pages/main';
import Registry from './pages/registry';

const Routes = createStackNavigator(
  {
    SignIn,
    SignUp,
    Main,
    Registry
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
