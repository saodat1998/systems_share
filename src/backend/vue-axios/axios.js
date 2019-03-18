/* global localStorage */

import axios from 'axios'

//const API_URL = process.env.API_URL || '192.168.0.104:8888/login';
const API_URL = process.env.API_URL || 'http://www.mocky.io/v2/5c8b3e3f360000dd048f7f6b';

export default axios.create({
    baseURL: API_URL,
    headers: {
    'Content-Type': 'application/json'
    // 'Authorization': 'Bearer ' + localStorage.token/
}
})