'use client'; // Required for hooks like useQuery (used by useGetPosts)

import React from 'react';
import AppleHeader from '@/components/organisms/AppleHeader';
import NewsroomHeader from '@/components/organisms/NewsroomHeader';
import NewsListItem from '@/components/molecules/NewsListItem';
import FeaturedPostCard from '@/components/molecules/FeaturedPostCard';
import useGetPosts from '@/lib/hooks/useGetPosts';

export default function HomePage() {
  // Fetch posts for "Latest News": page 1, no filter, default limit is 9
  const { data: latestPostsResponse, isLoading: isLoadingLatest, isError: isErrorLatest } = useGetPosts(1, '');

  // Fetch posts for "Apple Stories": page 1, filter by tag 'apple-stories'.
  // The hook fetches 9 by default; we'll slice to display 3.
  const { data: featuredPostsResponse, isLoading: isLoadingFeatured, isError: isErrorFeatured } = useGetPosts(1, '&filter=tag:apple-stories');
  
  // Fetch posts for "More from Newsroom": page 2, no filter.
  // The hook fetches 9 by default; we'll slice to display 5.
  const { data: morePostsResponse, isLoading: isLoadingMore, isError: isErrorMore } = useGetPosts(2, '');

  return (
    <>
      <AppleHeader />
      <NewsroomHeader />
      
      {/* Latest News Section */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-semibold text-apple-black mb-6 tracking-tight">
          Latest News
        </h2>
        {isLoadingLatest && (
          <div className="flex justify-center items-center h-40">
            <p className="text-apple-gray-medium">Loading articles...</p>
          </div>
        )}
        {isErrorLatest && (
          <div className="flex justify-center items-center h-40">
            <p className="text-red-500">Error loading articles. Please try again later.</p>
          </div>
        )}
        {latestPostsResponse && latestPostsResponse.posts && latestPostsResponse.posts.length > 0 && (
          <div className="divide-y divide-apple-gray-light">
            {latestPostsResponse.posts.map(post => (
              <NewsListItem key={post.id} post={post} />
            ))}
          </div>
        )}
        {latestPostsResponse && latestPostsResponse.posts && latestPostsResponse.posts.length === 0 && !isLoadingLatest && (
          <div className="flex justify-center items-center h-40">
            <p className="text-apple-gray-medium">No articles found.</p>
          </div>
        )}
      </div>

      {/* Apple Stories Section */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-semibold text-apple-black mb-6 tracking-tight">
          Apple Stories
        </h2>
        {isLoadingFeatured && (
          <div className="flex justify-center items-center h-60">
            <p className="text-apple-gray-medium">Loading Apple Stories...</p>
          </div>
        )}
        {isErrorFeatured && (
          <div className="flex justify-center items-center h-60">
            <p className="text-red-500">Error loading Apple Stories. Please try again later.</p>
          </div>
        )}
        {featuredPostsResponse && featuredPostsResponse.posts && featuredPostsResponse.posts.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredPostsResponse.posts.slice(0, 3).map(post => (
              <FeaturedPostCard key={post.id} post={post} />
            ))}
          </div>
        )}
        {featuredPostsResponse && featuredPostsResponse.posts && featuredPostsResponse.posts.length === 0 && !isLoadingFeatured && (
          <div className="flex justify-center items-center h-60">
            <p className="text-apple-gray-medium">No Apple Stories found.</p>
          </div>
        )}
      </section>
      
      {/* More from Newsroom Section */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-semibold text-apple-black mb-6 tracking-tight">
          More from Newsroom
        </h2>
        {isLoadingMore && (
          <div className="flex justify-center items-center h-40">
            <p className="text-apple-gray-medium">Loading more articles...</p>
          </div>
        )}
        {isErrorMore && (
          <div className="flex justify-center items-center h-40">
            <p className="text-red-500">Error loading more articles. Please try again later.</p>
          </div>
        )}
        {morePostsResponse && morePostsResponse.posts && morePostsResponse.posts.length > 0 && (
          <div className="divide-y divide-apple-gray-light">
            {/* Displaying up to 5 posts from page 2 */}
            {morePostsResponse.posts.slice(0, 5).map(post => (
              <NewsListItem key={post.id} post={post} />
            ))}
          </div>
        )}
        {morePostsResponse && morePostsResponse.posts && morePostsResponse.posts.length === 0 && !isLoadingMore && (
          <div className="flex justify-center items-center h-40">
            <p className="text-apple-gray-medium">No more articles found.</p>
          </div>
        )}
        <div className="mt-10 text-center">
          <a href="/archive" className="text-lg text-apple-blue-link hover:text-apple-blue-hover hover:underline">
            View Archive
          </a>
        </div>
      </section>
      
      {/* Footer will be added later */}
    </>
  );
}
