import { default as axiosStatic } from 'axios';

const axios = axiosStatic.create({
  withCredentials: true
});

/**
 * Fetches a single project.
 *
 * @param wbsNum Project WBS number of the requested project.
 */
export const getRandomColor = () => {
  return axios.get<string>('http://localhost:8080/colors/random', {
    transformResponse: (data) => JSON.parse(data)
  });
};
