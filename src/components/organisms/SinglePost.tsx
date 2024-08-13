import React from 'react';
import DOMPurify from 'dompurify';
import Image from 'next/image';
import { TailSpin } from 'react-loader-spinner';
import useGetPost from '@/lib/hooks/useGetPost';

interface Props {
  slug: string;
}

const formatDate = (isoString: string) => {
  const date = new Date(isoString);
  return (
    date.toLocaleDateString('en-US', {
      weekday: 'long', // e.g., "Monday"
      year: 'numeric',
      month: 'long', // e.g., "August"
      day: 'numeric',
    }) +
    ' ' +
    date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })
  );
};

const PostPage: React.FC<Props> = ({ slug }) => {
  const { data, isLoading, error } = useGetPost(slug);

  const formattedDate = formatDate(data?.published_at ?? '');

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen">
        <TailSpin
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );

  if (error) return <p>Error: {error.message}</p>;

  if (!data) return <p>No data found</p>;

  const sanitizedHtml = DOMPurify.sanitize(data.html ?? '');

  return (
    <div className="post-body gh-content w-full flex justify-center mt-4 sm:mt-20 px-4">
      <div className="w-full max-w-[1000px]">
        <h1 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-6">
          {data.title}
        </h1>

        <div className="space-y-4">
          {data.authors?.map((author, index) => (
            <div key={index} className="flex items-center space-x-4">
              <Image
                src={author?.profile_image} // Assuming author.profile_image contains the image URL
                alt={author.name}
                width={48} // Adjust width as needed
                height={48} // Adjust height as needed
                className="rounded-full" // Image styles
                layout="intrinsic" // Ensures the image maintains its aspect ratio
              />
              <p className="text-sm font-medium">{author.name}</p>
            </div>
          ))}
          <p className="text-sm text-gray-400">{formattedDate}</p>
        </div>

        <hr className="my-6 border-gray-100" />

        <Image
          src={data.feature_image ?? ''}
          alt=""
          width={1000}
          height={500}
          className="w-full rounded-2xl my-6 sm:mb-8"
        />
        <div
          className="gh-content prose prose-sm sm:prose lg:prose-lg"
          dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
        />
      </div>
    </div>
  );
};

export default PostPage;
