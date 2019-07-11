import axios from 'axios';
import { AsyncStorage } from 'react-native';

/* Endereços para cada emulador/simulador:
 ** Genymotion:              http://10.0.3.2:3333/
 ** Emulador Android Studio: http://10.0.2.2:3333/
 ** Simulador IOS:           http://localhost:3333/
 */

const api = axios.create({
  baseURL: 'http://812af1ac.ngrok.io/api'
  // baseURL: 'http:ponto-eletronico-app.herokuapp.com/api',
});

api.interceptors.request.use(async config => {
  try {
    const token = await AsyncStorage.getItem('@PontoApp:token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  } catch (err) {
    alert(err);
  }
});

export default api;
