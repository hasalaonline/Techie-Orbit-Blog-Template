"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardDescription, CardHeader, CardTitle } from "../atoms/card";
import Link from "next/link";
import { TailSpin } from "react-loader-spinner";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/atoms/carousel";

interface Post {
  id: string;
  title: string;
  slug: string;
  feature_image: string;
  published_at: string;
  reading_time: number;
}

const Hero: React.FC = () => {
  const {
    data: posts,
    isLoading,
    error,
  } = useQuery<Post[]>({
    queryKey: ["featuredPost"],
    queryFn: async () => {
      const response = await fetch(`/api/featured`);
      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }
      return response.json();
    },
  });

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen">
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
          {posts?.map((post) => (
            <CarouselItem key={post.id}>
              <div className="relative">
                <Image
                  src={post.feature_image}
                  alt={post.title}
                  width={800}
                  height={600}
                  className="w-full max-w-4xl rounded-3xl"
                />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
                  <Card className="w-full sm:w-auto">
                    <Link href={`/${post.slug}/`}>
                      <CardHeader>
                        <CardTitle>{post.title}</CardTitle>
                        <CardDescription>
                          {new Date(post.published_at).toLocaleDateString()} -{" "}
                          {post.reading_time} min read
                        </CardDescription>
                      </CardHeader>
                    </Link>
                  </Card>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Hero;
