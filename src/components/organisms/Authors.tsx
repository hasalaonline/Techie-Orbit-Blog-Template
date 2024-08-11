'use client'
import React, { useState } from 'react'
import { TailSpin } from 'react-loader-spinner'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import AuthorCard from '../molecules/AuthorCard'
import useGetAuthors from '@/lib/hooks/useGetAuthors'

const Authors = () => {
  const [page, setPage] = useState(1)
  const [limit] = useState(7)

  const { data, isLoading, error } = useGetAuthors(page, limit)

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

  return (
    <div className="w-full flex justify-center mt-20 sm:mt-20 px-4 sm:px-0">
      <div className="w-full max-w-[1000px]">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {data?.authors.map((author: any) => (
            <AuthorCard key={author.slug} author={author} />
          ))}
        </div>
        <div className="relative mt-8">
          {page > 1 && (
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              className={`absolute left-0 px-4 py-2 bg-gray-200 text-gray-700 rounded`}
              aria-label="Previous page"
            >
              <ArrowLeft />
            </button>
          )}

          {data?.authors.length === 9 && (
            <button
              onClick={() => setPage((prev) => prev + 1)}
              className={`absolute right-0 px-4 py-2 bg-gray-200 text-gray-700 rounded`}
              aria-label="Next page"
            >
              <ArrowRight />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Authors
