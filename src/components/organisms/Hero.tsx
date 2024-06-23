"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
// import { fetchFeaturedPost } from "@/lib/api/axios";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { fetchFeaturedPost } from "@/lib/api/ghost";

const Hero = () => {
  const {
    data: posts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["featuredPost"],
    queryFn: () => fetchFeaturedPost(),
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <div className="">
        <ul>
          {posts?.map((post: any) => (
            <li key={post.id} className="relative flex justify-center">
              <img
                src={post.feature_image}
                alt=""
                className="w-3/4 rounded-3xl"
              />
              <div className="absolute bottom-[-20px] left-20 flex items-center justify-center">
                <Card className="w-1/2">
                  <CardHeader>
                    <CardTitle>{post.title}</CardTitle>
                    <CardDescription>
                      {post.published_at} - {post.reading_time} min read
                    </CardDescription>
                  </CardHeader>
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
