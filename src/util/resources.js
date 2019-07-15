import axios from 'axios';

// Resources for /posts endpoint on API
// @see https://github.com/mzabriskie/axios#creating-an-instance
export const contactResource = axios.create({
  baseURL: `http://glennpacker.net/api/contact/`
});

export const postsResource = axios.create({
  baseURL: `http://glennpacker.net/api/posts/`
});
