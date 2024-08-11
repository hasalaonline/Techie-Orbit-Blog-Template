import { Post } from '../../lib/types/post'
import React from 'react'
import DOMPurify from 'dompurify'
import Image from 'next/image'
import { TailSpin } from 'react-loader-spinner'
import useGetPost from '@/lib/hooks/useGetPost'

interface Props {
  slug: string
}

const PostPage: React.FC<Props> = ({ slug }) => {
  const { data, isLoading, error } = useGetPost(slug);

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
    )

  if (error) return <p>Error: {error.message}</p>

  if (!data) return <p>No data found</p>
  
  const sanitizedHtml = DOMPurify.sanitize(data.html ?? '')

  return (
    <div className="post-body gh-content w-full flex justify-center mt-4 sm:mt-20 px-4">
      <div className="w-full max-w-[1000px]">
        <h1 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-10">
          {data.title}
        </h1>
        {data.authors?.map((author, index) => (
          <p key={index} className="text-sm mb-2 sm:mb-4">
            {author.name}
          </p>
        ))}
        <p className="text-sm mb-4">{data.published_at}</p>
        <Image
          src={data.feature_image ?? ''}
          alt=""
          width={1000}
          height={500}
          className="w-full rounded-2xl mb-6 sm:mb-8"
        />
        <div
          className="gh-content prose prose-sm sm:prose lg:prose-lg"
          dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
        />
      </div>
    </div>
  )
}

export default PostPage
