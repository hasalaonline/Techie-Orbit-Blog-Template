"use client";
import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Post from "../molecules/post-card";
import { TailSpin } from "react-loader-spinner";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Props {
  filter?: string;
}

const Posts = ( { filter = "" } : Props) => {
  const [page, setPage] = useState(1);
  const [limit] = useState(9);
  const [totalPosts, setTotalPosts] = useState(0);

  const { data, isLoading, error } = useQuery({
    queryKey: ["posts", page, limit],
    queryFn: async () => {
      const response = await fetch(`/api/posts?page=${page}&limit=${limit}` + filter);
      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }
      return response.json();
    },
  });

  useEffect(() => {
    if (data?.meta) {
      setTotalPosts(data.meta.pagination.total);
    }
  }, [data]);

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
    <div className="w-full flex justify-center mt-20 sm:mt-20 px-4 sm:px-0">
      <div className="w-full max-w-[1000px]">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {data?.posts.map((post: any) => (
            <Post
              key={post.slug}
              featuredImage={post.feature_image}
              title={post.title}
              date={post.published_at}
              time={post.reading_time}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          ))}
        </div>
        <div className="relative mt-8">
          {page > 1 && (
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
              className={`absolute left-0 px-4 py-2 bg-gray-200 text-gray-700 rounded 
                 ${
                   page === 1
                     ? "opacity-50 cursor-not-allowed"
                     : "hover:bg-gray-300 focus:ring-2 focus:ring-indigo-500"
                 }`}
              aria-label="Previous page"
              aria-disabled={page === 1}
            >
              <ArrowLeft />
            </button>
          )}

          {data?.posts.length === 9 && (
            <button
              onClick={() => setPage((prev) => prev + 1)}
              disabled={data?.posts.length === totalPosts}
              className={`absolute right-0 px-4 py-2 bg-gray-200 text-gray-700 rounded 
                 ${
                   data?.posts.length === totalPosts
                     ? "opacity-50 cursor-not-allowed"
                     : "hover:bg-gray-300 focus:ring-2 focus:ring-indigo-500"
                 }`}
              aria-label="Next page"
              aria-disabled={data?.posts.length === totalPosts}
            >
              <ArrowRight />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Posts;
