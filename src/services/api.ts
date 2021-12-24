import axios from 'axios';

const API = axios.create({
    baseURL: 'https://next.json-generator.com/'
})

export default API;