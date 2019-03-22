/* global localStorage */

import axios from 'axios'

const API_URL = process.env.API_URL || 'http://134.209.227.52:8888';
// const API_URL = process.env.API_URL || 'http://www.mocky.io/v2/5c8b3e3f360000dd048f7f6b';

export default axios.create({
    baseURL: API_URL,
    headers: {
    'Content-Type': 'application/json',
    // 'auth': localStorage.getItem('token')
}
})