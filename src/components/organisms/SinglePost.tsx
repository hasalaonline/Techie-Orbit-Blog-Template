import React from 'react';
import DOMPurify from 'dompurify';
import Image from 'next/image';
import { TailSpin } from 'react-loader-spinner'; // Keep loader for now
import useGetPost from '@/lib/hooks/useGetPost';

interface Props {
  slug: string;
}

// Simplified date format
const formatDate = (isoString: string | undefined) => {
  if (!isoString) return '';
  const date = new Date(isoString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const PostPage: React.FC<Props> = ({ slug }) => {
  const { data: post, isLoading, error } = useGetPost(slug);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-200px)]"> {/* Adjust height as needed */}
        <TailSpin
          height="80"
          width="80"
          color="#007AFF" // Apple Blue for loader
          ariaLabel="tail-spin-loading"
          radius="1"
          visible={true}
        />
      </div>
    );
  }

  if (error) return <p className="text-red-500 text-center py-10">Error: {error.message}</p>;
  if (!post) return <p className="text-apple-gray-medium text-center py-10">Article not found.</p>;

  // Sanitize HTML content
  const sanitizedHtml = typeof window !== 'undefined' ? DOMPurify.sanitize(post.html ?? '') : post.html ?? '';

  return (
    <article className="font-sans"> {/* Apply font-sans at the root of the article */}
      {/* Post Title */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-apple-black mb-4 sm:mb-6 leading-tight tracking-tight">
        {post.title}
      </h1>

      {/* Post Excerpt (Optional, if available and desired) */}
      {post.custom_excerpt && (
        <p className="text-lg sm:text-xl text-apple-gray-dark mb-6 sm:mb-8 leading-relaxed">
          {post.custom_excerpt}
        </p>
      )}

      {/* Metadata: Author and Date */}
      <div className="flex flex-wrap items-center text-sm text-apple-gray-medium mb-6 sm:mb-8">
        {post.primary_author && (
          <div className="flex items-center mr-4 mb-2 sm:mb-0">
            {post.primary_author.profile_image && (
              <Image
                src={post.primary_author.profile_image}
                alt={post.primary_author.name ?? 'Author image'}
                width={32} // Smaller avatar for metadata
                height={32}
                className="rounded-full mr-2"
              />
            )}
            <span className="font-medium text-apple-gray-dark">{post.primary_author.name}</span>
          </div>
        )}
        <span className="opacity-80">{formatDate(post.published_at)}</span>
      </div>

      {/* Feature Image */}
      {post.feature_image && (
        <div className="mb-6 sm:mb-8">
          <Image
            src={post.feature_image}
            alt={post.feature_image_alt || post.title}
            width={1200} // Adjust width as needed for layout
            height={675} // Adjust height based on common aspect ratios (16:9)
            className="w-full h-auto rounded-lg object-cover"
            priority // Prioritize loading of the feature image
          />
          {post.feature_image_caption && (
             <figcaption className="text-xs text-center mt-2 text-apple-gray-medium italic" 
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.feature_image_caption)}} />
          )}
        </div>
      )}

      {/* Post Body / HTML Content */}
      {/* Apply .post-body class for global styles from globals.css */}
      {/* Add text-apple-gray-dark and leading-relaxed for overall readability */}
      {/* space-y-6 removed to rely on global .post-body styles for child element margins */}
      <div
        className="post-body text-apple-gray-dark text-base sm:text-lg leading-relaxed"
        dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
      />
    </article>
  );
};

export default PostPage;
