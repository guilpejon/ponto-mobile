import axios from 'axios';

/* Endereços para cada emulador/simulador:
 ** Genymotion:              http://10.0.3.2:3333/
 ** Emulador Android Studio: http://10.0.2.2:3333/
 ** Simulador IOS:           http://localhost:3333/
 */

const api = axios.create({
  baseURL: 'http://d79b97cc.ngrok.io/api'
  // baseURL: 'http:10.0.3.2:3000/api',
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
