import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from '../atoms/card'
import Link from 'next/link'
import Image from 'next/image'
import { FaXTwitter } from 'react-icons/fa6'
import { AiOutlineGlobal } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'
import { Author } from '@/lib/types/author'

interface Props {
  author: Author
}

const AuthorCard = ({ author }: Props) => {
  return (
    <Card className="p-4 shadow-lg rounded-lg">
      <Link href={`authors/${author.slug}/`}>
        <CardHeader>
          <Image
            src={author.profile_image ?? ''}
            alt={`${name}'s profile picture`}
            width={300}
            height={200}
            className="w-full rounded-md mb-4"
          />
          <CardTitle className="text-center text-xl font-semibold">
            {author.name}
          </CardTitle>
        </CardHeader>
      </Link>
      <CardDescription className="mt-2 text-center text-gray-600">
        {author.bio}
      </CardDescription>
      <div className="mt-4 flex justify-center space-x-4">
        {author.twitter && (
          <Link href={author.twitter} aria-label={`${name}'s Twitter`}>
            <FaXTwitter />
          </Link>
        )}
        {author.facebook && (
          <Link href={author.facebook} aria-label={`${name}'s Facebook`}>
            <FaFacebook />
          </Link>
        )}
        {author.website && (
          <Link href={author.website} aria-label={`${name}'s Website`}>
            <AiOutlineGlobal />
          </Link>
        )}
      </div>
    </Card>
  )
}

export default AuthorCard
