'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardDescription, CardHeader, CardTitle } from '../atoms/card';
import Link from 'next/link';
import { TailSpin } from 'react-loader-spinner';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/atoms/carousel';
import { Post } from '@/lib/types/post';

const MAX_EXCERPT_LENGTH = 100;

const truncateExcerpt = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
};

const Hero: React.FC = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['featuredPost'],
    queryFn: async () => {
      const response = await fetch(`/api/featured`);
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      return response.json();
    },
  });

  if (isLoading)
    return (
      <div
        className="flex items-center justify-center"
        style={{ height: '500px' }}
      >
        <TailSpin
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="tail-spin-loading"
          radius="1"
          visible={true}
        />
      </div>
    );

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="mt-10 flex flex-col items-center px-4">
      <h2 className="font-bold text-xl mb-4 text-center sm:text-left">
        Featured Stories
      </h2>
      <Carousel className="w-full max-w-2xl">
        <CarouselContent>
          {data?.posts?.map((post: Post, index: number) => (
            <CarouselItem key={post.id}>
              <Card className="sm:flex items-center w-full max-w-4xl rounded-3xl">
                <div className="sm:w-1/2">
                  <Image
                    src={post.feature_image ?? ''}
                    alt={post.title}
                    width={800}
                    height={600}
                    priority={index === 0} // Load first image with priority
                    className="w-full h-auto rounded-t-3xl sm:rounded-l-3xl sm:rounded-tr-none"
                  />
                </div>

                <div className="sm:w-1/2 p-4 rounded-l-3xl">
                  <Link href={`/${post.slug}/`}>
                    <CardHeader>
                      <CardTitle className="text-[1rem]">
                        {post.title}
                      </CardTitle>
                      <CardDescription>
                        {truncateExcerpt(post.excerpt, MAX_EXCERPT_LENGTH)}
                      </CardDescription>
                      <CardDescription>
                        {new Date(post.published_at).toLocaleDateString()} -{' '}
                        {post.reading_time} min read
                      </CardDescription>
                    </CardHeader>
                  </Link>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:block" />
        <CarouselNext className="hidden sm:block" />
      </Carousel>
    </div>
  );
};

export default Hero;
