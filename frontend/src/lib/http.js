import axios from 'axios'

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_API,
  timeout: 13000,
  crossDomain: true,
})

export default httpClient
