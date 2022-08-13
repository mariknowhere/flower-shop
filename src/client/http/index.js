import axios from 'axios';
import {REACT_APP_API_URL} from "../constants/routes";

const $host = axios.create({
  baseURL: REACT_APP_API_URL
})

const $authHost = axios.create({
  baseURL: REACT_APP_API_URL
})

const authInterceptor = config => {
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`

  return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
  $host,
  $authHost,
}
