"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../../lib/api/ghost";
import Post from "../molecules/post-card";
import { TailSpin } from "react-loader-spinner";

const Posts = () => {
  const {
    data: posts,
    isLoading,
    error,
  } = useQuery({ queryKey: ["posts"], queryFn: () => fetchPosts() });

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
      <div className="w-full flex justify-center mt-20 sm:mt-40 px-4 sm:px-0">
        <div className="w-full max-w-[1000px]">
          <h2 className="font-bold text-xl mb-4 text-center sm:text-left">Latest Posts</h2>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {posts?.map((post: any) => (
              <Post
                key={post.slug}
                featuredImage={post.feature_image}
                title={post.title}
                date={post.published_at}
                time={post.reading_time}
                slug={post.slug}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Posts;