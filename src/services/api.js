import axios from 'axios';

/* Endereços para cada emulador/simulador:
 ** Genymotion:              http://10.0.3.2:3333/
 ** Emulador Android Studio: http://10.0.2.2:3333/
 ** Simulador IOS:           http://localhost:3333/
 */

const api = axios.create({
  baseUrl: '192.168.56.101:5555'
});

export default api;
