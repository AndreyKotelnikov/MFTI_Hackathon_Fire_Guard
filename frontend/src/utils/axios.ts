import axios from 'axios';
import axiosRetry from 'axios-retry';

axiosRetry(axios, { retries: 5 });

// const baseURL = import.meta.env.VITE_APP_API_URL + import.meta.env.VITE_APP_API_PREFIX
// axios.defaults.baseURL = baseURL

// axios.interceptors.request.use((config) => {
//   const store = useStore();
//   if (store.state.main.currentProfile && store.state.main.currentProfile.current_institution_schema) {
//     config.baseURL = import.meta.env.VITE_APP_API_URL + '/' + store.state.main.currentProfile.current_institution_schema + import.meta.env.VITE_APP_API_PREFIX
//     axios.defaults.baseURL = config.baseURL
//   } else {
//     config.baseURL = import.meta.env.VITE_APP_API_URL + '/public' + import.meta.env.VITE_APP_API_PREFIX
//     axios.defaults.baseURL = config.baseURL
//   }
//   return config;
// }, (error) => {
//   return Promise.reject(error);
// });

export default axios
