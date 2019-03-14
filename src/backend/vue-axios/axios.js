/* global localStorage */

import axios from 'axios'

const API_URL = process.env.API_URL || 'https://tonicdev.io/theopak/jwt-auth-demo/branches/master/api/secure-endpoint';

export default axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.token
    }
})