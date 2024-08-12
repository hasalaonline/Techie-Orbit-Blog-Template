import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { Page } from '../types/page';

interface PageResponseData {
  html: string;
}

const useGetInfoPage = (
  slug: string,
): UseQueryResult<PageResponseData, Error> => {
  return useQuery({
    queryKey: [slug],
    queryFn: async (): Promise<PageResponseData> => {
      const response = await fetch(`/api/page?slug=${slug}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    },
  });
};

export default useGetInfoPage;
