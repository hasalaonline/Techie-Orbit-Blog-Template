'use client'
import { TailSpin } from 'react-loader-spinner'
import Footer from './footer'
import Header from './Header'
import DOMPurify from 'dompurify'
import useGetInfoPage from '@/lib/hooks/useGetInfoPage'

interface Props {
  slug: string
}

const InfoPage = ({ slug }: Props) => {
  const { data, isLoading, error } = useGetInfoPage(slug)

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

  const sanitizedHtml = DOMPurify.sanitize(data.html)

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
