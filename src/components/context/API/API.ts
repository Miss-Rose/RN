import axios from 'axios';
import credentials from './credentials';

const {appURL, baseURL, API_key} = credentials;

export default class API {
  getWeather (city: string) {
    return axios.get(`${baseURL}?q=${city}&appid=${API_key}`)
      .then(response => response.data)
      .catch(err => err);
  }
  getOneCallApi () {
    return axios.get(`${appURL}`)
      .then(response => response.data)
      .catch(err => err);
  }
}
