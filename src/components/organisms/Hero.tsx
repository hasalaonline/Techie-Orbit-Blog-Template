"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { fetchFeaturedPost } from "@/lib/api/ghost";
import Link from "next/link";
import { TailSpin } from "react-loader-spinner";

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
    <>
      <div className="mt-10">
        <ul>
          {posts?.map((post: any) => (
            <li key={post.id} className="relative flex justify-center">
              <img
                src={post.feature_image}
                alt=""
                className="w-2/4 rounded-3xl"
              />
              <div className="absolute bottom-[-40px] left-60 flex items-center justify-center">
                <Card className="w-1/2">
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
    </>
  );
};

export default Hero;
