import axios from 'axios';

const request = axios.create({
  baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

const getRequest = async (url, params) => {
  try {
    const response = await request.get(url, params);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { request, getRequest };
