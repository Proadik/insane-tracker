import axios from 'axios';

export const BaseClient = axios.create({
  baseURL: 'https://dummyjson.com/',
});
