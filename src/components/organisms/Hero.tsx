"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardDescription, CardHeader, CardTitle } from "../atoms/card";
import { fetchFeaturedPost } from "../../lib/api/ghost";
import Link from "next/link";
import { TailSpin } from "react-loader-spinner";
import Image from "next/image";

const Hero = () => {
  const {
    data: posts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["featuredPost"],
    queryFn: () => fetchFeaturedPost(),
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
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="mt-10 flex flex-col items-center px-4">
        <ul className="w-full max-w-4xl">
          {posts?.map((post: any) => (
            <li
              key={post.id}
              className="relative flex flex-col items-center sm:items-start"
            >
              <Image
                src={post.feature_image}
                alt={post.title}
                width={600}
                height={400}
                className="w-full max-w-lg rounded-3xl"
              />
              <div className="absolute bottom-[-20px] sm:bottom-[-40px] sm:left-20 w-full px-4 sm:w-auto sm:px-0">
                <Card className="w-full sm:w-auto">
                  <Link href={`/posts/${post.slug}`}>
                    <CardHeader>
                      <CardTitle>{post.title}</CardTitle>
                      <CardDescription>
                        {post.published_at} - {post.reading_time} min read
                      </CardDescription>
                    </CardHeader>
                  </Link>
                </Card>
              </div>
            </li>
          ))}
        </ul>
      </div>
  );
};

export default Hero;
