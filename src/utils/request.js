import axios from 'axios';

const request = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
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
