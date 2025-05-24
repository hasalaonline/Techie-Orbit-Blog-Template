import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Using next/image for optimization
import { Post } from '@/lib/types/post';

interface FeaturedPostCardProps {
  post: Post;
}

const FeaturedPostCard: React.FC<FeaturedPostCardProps> = ({ post }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <Link href={`/${post.slug}`} passHref>
      <article className="font-sans bg-apple-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden flex flex-col h-full group"> {/* Added group for group-hover */}
        {/* Adjusted height for a slightly taller image, e.g., common 4:3 or similar feel */}
        <div className="relative w-full h-56 sm:h-60 md:h-64"> 
          {post.feature_image ? (
            <Image
              src={post.feature_image}
              alt={post.feature_image_alt || post.title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 ease-in-out group-hover:scale-105" // Scale effect on hover
            />
          ) : (
            <div className="w-full h-full bg-apple-gray-light flex items-center justify-center">
              <span className="text-apple-gray-medium text-sm">No Image Available</span>
            </div>
          )}
        </div>
        <div className="p-4 md:p-5 flex flex-col flex-grow"> {/* Slightly adjusted padding */}
          {post.primary_tag && (
            <p className="text-xs font-semibold uppercase text-apple-blue-link mb-1.5 tracking-wide"> {/* Adjusted margin */}
              {post.primary_tag.name}
            </p>
          )}
          {!post.primary_tag && (
             <p className="text-xs font-semibold uppercase text-apple-blue-link mb-1.5 tracking-wide">
              Featured {/* Fallback if no primary_tag */}
            </p>
          )}
          <h3 className="text-lg md:text-xl font-semibold text-apple-black mb-2 leading-tight group-hover:text-apple-blue-link transition-colors duration-150"> {/* Title color change on hover */}
            {post.title}
          </h3>
          {post.custom_excerpt || post.excerpt ? (
            <p className="text-sm text-apple-gray-dark mb-3 flex-grow leading-snug"> {/* Adjusted line height */}
              {post.custom_excerpt || post.excerpt}
            </p>
          ) : <div className="flex-grow"></div>} {/* Ensure spacing pushes date down even if no excerpt */}
          <p className="text-xs text-apple-gray-medium mt-auto pt-2"> {/* Added pt-2 for more space above date */}
            {formatDate(post.published_at)}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default FeaturedPostCard;
