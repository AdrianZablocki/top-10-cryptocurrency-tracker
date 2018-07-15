import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.coinmarketcap.com'
});

export default instance;