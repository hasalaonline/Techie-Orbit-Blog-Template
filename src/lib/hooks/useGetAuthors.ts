import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { Author } from '../types/author';

interface AuthorsResponse {
    authors: Author[];
    meta: {
      pagination: {
        total: number;
        pages: number;
        page: number;
        limit: number;
        next: number | null;
        prev: number | null;
      };
    };
  }

const useGetAuthors = (page: number, limit: number): UseQueryResult<AuthorsResponse, Error> => {
  return useQuery({
    queryKey: ['authors', page, limit],
    queryFn: async (): Promise<AuthorsResponse> => {
      const response = await fetch(`/api/authors?page=${page}&limit=${limit}`);
      if (!response.ok) {
        throw new Error('Failed to fetch authors');
      }
      return response.json();
    },
  });
};

export default useGetAuthors;
