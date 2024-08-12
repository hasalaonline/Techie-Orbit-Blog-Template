import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { Post } from '../types/post';

interface PostPageData {
  html: string;
  title: string;
  authors: { name: string }[];
  published_at: string;
  feature_image: string;
}

const useGetPost = (slug: string): UseQueryResult<PostPageData, Error> => {
  return useQuery({
    queryKey: [slug],
    queryFn: async (): Promise<PostPageData> => {
      const response = await fetch(`/api/post?slug=${slug}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    },
  });
};

export default useGetPost;
