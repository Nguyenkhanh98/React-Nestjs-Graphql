import axios from 'axios';
import configs from '../configs';
import services from '../services';

const makeRequest = axios.create({
  baseURL: configs.api.HOST + configs.api.VERSION,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// makeRequest.interceptors.request.use(async(config) => {
//   const widgetData = localStorage.getItem('widget:Web');
//   const newConfig = config;

//   if (!widgetData || Date.now() >= JSON.parse(widgetData).expires_in) {
//     try {
//     } catch (error) {
//       return Promise.reject(error);
//     }
//   }
//   //   newConfig.headers.Authorization = access_token ? `Bearer ${access_token}` : '';

//   return newConfig;
// });

// makeRequest.interceptors.response.use((response) => response, async(error) => {
//   const originalRequest = error.config;

//   if (error.response) {
//     const { status } = error.response;
//     const { data } = error.response.data;

//     if (status === 400 && data.isExpired) {
//       try {
//         // originalRequest.headers.Authorization = `Bearer ${access_token}`;
//         return axios(originalRequest);
//       } catch (err) {
//         return Promise.reject(err);
//       }
//     }
//   }

//   return Promise.reject(error);
// });

export { makeRequest };
