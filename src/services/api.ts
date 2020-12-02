import axios from 'axios';

const api = axios.create({
    baseURL: 'https://prova-deploy.herokuapp.com/'
})

export default api