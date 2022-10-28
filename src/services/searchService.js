import { getRequest } from '~/utils';

const search = async (q, type = 'less') => {
  try {
    const response = await getRequest(`users/search`, { params: { q, type } });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { search };
