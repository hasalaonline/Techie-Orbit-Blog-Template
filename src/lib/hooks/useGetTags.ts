import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { Tag } from '../types/tag';

interface TagsResponse {
  tags: Tag[];
}

const useGetTags = (): UseQueryResult<TagsResponse, Error> => {
  return useQuery({
    queryKey: ['tags'],
    queryFn: async (): Promise<TagsResponse> => {
      const response = await fetch(`/api/tags`);
      if (!response.ok) {
        throw new Error('Failed to fetch tags');
      }
      return response.json();
    },
  });
};

export default useGetTags;
