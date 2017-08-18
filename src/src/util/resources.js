import axios from 'axios';

import { API_BASE } from 'src/config/constants';

// Resources for /posts endpoint on API
// @see https://github.com/mzabriskie/axios#creating-an-instance
export const contactResource = axios.create({
  baseURL: `${API_BASE}/contact/`
});

export const postsResource = axios.create({
  baseURL: `${API_BASE}/posts/`
});
