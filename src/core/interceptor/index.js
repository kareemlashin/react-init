import axios from 'axios'
axios.interceptors.request.use(function (config) {

  document.body.classList.add('loading-indicator');

  const token = window.localStorage.token;
  if (token) {
    config.headers.Authorization = `token ${token}`
  }
  return config
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
  document.body.classList.remove('loading-indicator');
  return response;
}, function (error) {
  document.body.classList.remove('loading-indicator');
  return Promise.reject(error);
});