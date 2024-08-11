import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { Post } from '../types/post'

interface PostsResponse {
  posts: Post[]
  meta: {
    pagination: {
      prev: number | null
      next: number | null
      count: number
    }
  }
}

const usePosts = (
  page: number,
  filter: string,
): UseQueryResult<PostsResponse, Error> => {
  return useQuery({
    queryKey: ['posts', page, filter],
    queryFn: async (): Promise<PostsResponse> => {
      const response = await fetch(`/api/posts?page=${page}&limit=9${filter}`)
      if (!response.ok) {
        throw new Error('Failed to fetch posts')
      }
      return response.json()
    },
  })
}

export default usePosts
