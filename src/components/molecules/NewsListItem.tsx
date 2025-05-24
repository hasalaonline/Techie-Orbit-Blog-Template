import React from 'react';
import Link from 'next/link';
import { Post } from '@/lib/types/post'; // Assuming this is the correct path

interface NewsListItemProps {
  post: Post;
}

const NewsListItem: React.FC<NewsListItemProps> = ({ post }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <article className="py-6 md:py-8 border-b border-apple-gray-light last:border-b-0 font-sans">
      {/* On mobile (flex-col), text content (order-1) comes before date (order-2) */}
      {/* On sm+ (flex-row), text content (sm:order-1) is left, date (sm:order-2) is right */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-x-4 gap-y-2">
        <div className="w-full sm:w-3/4 order-1"> {/* Text content first on mobile */}
          {post.primary_tag && (
            <p className="text-xs font-semibold uppercase text-apple-blue-link mb-1 tracking-wide">
              {post.primary_tag.name}
            </p>
          )}
          {!post.primary_tag && (
             <p className="text-xs font-semibold uppercase text-apple-blue-link mb-1 tracking-wide">
              UPDATE {/* Placeholder if no primary_tag */}
            </p>
          )}
          <Link href={`/${post.slug}`} passHref>
            <h3 className="text-xl md:text-2xl font-semibold text-apple-black hover:text-apple-blue-link transition-colors duration-150 cursor-pointer leading-tight">
              {post.title}
            </h3>
          </Link>
        </div>
        <div className="w-full sm:w-1/4 order-2 text-left sm:text-right mt-1 sm:mt-0"> {/* Date second on mobile */}
          <p className="text-xs text-apple-gray-medium tracking-wide">
            {formatDate(post.published_at)}
          </p>
        </div>
      </div>
    </article>
  );
};

export default NewsListItem;
