import { getRandomColor } from '../api/colors.api';
import { useQuery } from 'react-query';

export const useRandomColor = () => {
  return useQuery<string, Error>(['color'], async () => {
    const { data } = await getRandomColor();
    return data;
  });
};
