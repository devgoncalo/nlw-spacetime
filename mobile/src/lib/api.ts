import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://172.20.10.2:3333', // HOME
  // baseURL: 'http://89.114.69.149:3333', // PHONE
})
