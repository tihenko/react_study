import axios from 'axios';

import baseURL from '../constants/urls';

console.log(baseURL, 'baseURL')
const axiosService = axios.create({baseURL});

export {axiosService};
