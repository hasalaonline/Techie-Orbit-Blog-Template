'use client'
import { TailSpin } from 'react-loader-spinner'
import Footer from './footer'
import Header from './Header'
import { useQuery } from '@tanstack/react-query'
import DOMPurify from 'dompurify'

interface Props {
  slug: string
}

const InfoPage = ({ slug }: Props) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [slug],
    queryFn: async () => {
      const response = await fetch(`/api/page?slug=${slug}`)
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    },
  })

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

  const sanitizedHtml = DOMPurify.sanitize(data[0]?.html ?? '')

  return (
    <>
      <Header />
      <div className="post-body gh-content w-full flex justify-center mt-4 sm:mt-20 px-4">
        <div className="w-full max-w-[1000px]">
          <div
            className="gh-content prose prose-sm sm:prose lg:prose-lg"
            dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
          />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default InfoPage
