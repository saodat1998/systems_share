/* global localStorage */

import axios from 'axios'

const API_URL = process.env.API_URL || '192.168.0.104:8888/login/auth';

export default axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.token
    }
})