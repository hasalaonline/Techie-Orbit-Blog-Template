'use client'; // Already present

import React from 'react';
import { TailSpin } from 'react-loader-spinner';
import DOMPurify from 'dompurify';
import useGetInfoPage from '@/lib/hooks/useGetInfoPage';

interface Props {
  slug: string;
}

// Helper function to generate a title from the slug
const generateTitleFromSlug = (slug: string): string => {
  if (!slug) return 'Page'; // Default title
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const InfoPage: React.FC<Props> = ({ slug }) => {
  const { data, isLoading, error } = useGetInfoPage(slug);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-300px)]"> {/* Adjusted height */}
        <TailSpin
          height="80"
          width="80"
          color="#007AFF" // Apple Blue
          ariaLabel="tail-spin-loading"
          radius="1"
          visible={true}
        />
      </div>
    );
  }

  if (error) return <p className="text-red-500 text-center py-10">Error: {error.message}</p>;
  if (!data || !data.html) return <p className="text-apple-gray-medium text-center py-10">Content not found for this page.</p>;

  // Sanitize HTML content - ensure this runs client-side
  const sanitizedHtml = typeof window !== 'undefined' ? DOMPurify.sanitize(data.html) : data.html;
  const pageTitle = generateTitleFromSlug(slug);

  return (
    <article className="font-sans"> {/* font-sans is inherited, but good to be explicit if needed */}
      <h1 className="text-3xl sm:text-4xl font-bold text-apple-black mb-6 md:mb-8 leading-tight tracking-tight">
        {pageTitle}
      </h1>
      {/* Apply .post-body for global styles from globals.css */}
      {/* text-apple-gray-dark and leading-relaxed for overall readability */}
      <div
        className="post-body text-apple-gray-dark text-base sm:text-lg leading-relaxed"
        dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
      />
    </article>
  );
};

export default InfoPage;
