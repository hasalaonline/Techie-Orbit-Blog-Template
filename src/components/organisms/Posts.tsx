'use client';
import { useState } from 'react';
import PostCard from '../molecules/post-card';
import { TailSpin } from 'react-loader-spinner';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Post } from '@/lib/types/post';
import usePosts from '@/lib/hooks/useGetPosts';

interface Props {
  filter?: string;
}

const Posts = ({ filter = '' }: Props) => {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = usePosts(page, filter);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <TailSpin
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="tail-spin-loading"
          visible={true}
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500">Error: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center mt-20 sm:mt-20 px-4">
      <div className="w-full max-w-[1000px]">
        {data?.posts?.length ? (
          <>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {data.posts.map((post: Post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
            <div className="relative mt-8 flex justify-between">
              {data.meta.pagination.prev && (
                <button
                  onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                  className="px-4 py-2 text-gray-700 rounded"
                  aria-label="Previous page"
                >
                  <ArrowLeft />
                </button>
              )}
              {data.meta.pagination.next && (
                <button
                  onClick={() => setPage((prev) => prev + 1)}
                  className="px-4 py-2 text-gray-700 rounded"
                  aria-label="Next page"
                >
                  <ArrowRight />
                </button>
              )}
            </div>
          </>
        ) : (
          <p className="text-center text-gray-500">No posts found.</p>
        )}
      </div>
    </div>
  );
};

export default Posts;
