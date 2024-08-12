import React from 'react';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '../atoms/card';
import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/lib/types/post';

interface Props {
  post: Post;
}

const MAX_EXCERPT_LENGTH = 100;

const truncateExcerpt = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
};

const PostCard = ({ post }: Props) => {
  const date = new Date(post.published_at);
  const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;

  const truncatedExcerpt = truncateExcerpt(post.excerpt, MAX_EXCERPT_LENGTH);

  return (
    <Card>
      <Link href={`/${post.slug}/`}>
        <CardHeader>
          <Image
            src={post.feature_image ?? ''}
            alt={post.title}
            width={300}
            height={200}
            className="w-full rounded-md mb-4"
          />
          <CardTitle className="text-[1rem]">{post.title}</CardTitle>
          <CardDescription>{truncatedExcerpt}</CardDescription>
          <CardDescription>
            {formattedDate} - {post.reading_time} min read
          </CardDescription>
        </CardHeader>
      </Link>
    </Card>
  );
};

export default PostCard;
