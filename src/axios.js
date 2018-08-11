import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.coinmarketcap.com',
    chrtURL: 'https://rest.coinapi.io'
});

export default instance;