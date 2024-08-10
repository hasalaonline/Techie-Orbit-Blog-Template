"use client";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import PostCard from "../molecules/post-card";
import { TailSpin } from "react-loader-spinner";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Post } from "@/lib/types/post";

interface Props {
  filter?: string;
}

const Posts = ( { filter = "" } : Props) => {
  const [page, setPage] = useState(1);

  const { data, isLoading, error } = useQuery({
    queryKey: ["posts", page],
    queryFn: async () => {
      const response = await fetch(`/api/posts?page=${page}&limit=9` + filter);
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
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="w-full flex justify-center mt-20 sm:mt-20 px-4">
      <div className="w-full max-w-[1000px]">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {data?.posts.map((post: Post, index: any) => (
            <PostCard
              key={index}
              post={post}
            />
          ))}
        </div>
        <div className="relative mt-8">
          {(data?.meta?.pagination?.prev !== null) && (
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              className={`absolute left-0 px-4 py-2 bg-gray-200 text-gray-700 rounded`}
              aria-label="Previous page"
            >
              <ArrowLeft />
            </button>
          )}

          {(data?.meta?.pagination?.next !== null) && (
            <button
              onClick={() => setPage((prev) => prev + 1)}
              className={`absolute right-0 px-4 py-2 bg-gray-200 text-gray-700 rounded` }
              aria-label="Next page"
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
