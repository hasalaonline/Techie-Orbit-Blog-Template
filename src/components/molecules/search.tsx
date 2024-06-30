"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "@/lib/api/ghost";
import { PostOrPage } from "@tryghost/content-api";
import Link from "next/link";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<PostOrPage[]>([]);

  const {
    data: posts,
    isLoading,
    error,
  } = useQuery({ queryKey: ["posts"], queryFn: () => fetchPosts() });

  const handleSearch = (e: { target: { value: string } }) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const filteredPosts =
      posts?.filter(
        (post) => post?.title?.toLowerCase().includes(searchTerm) ?? false
      ) || [];

    if (searchTerm.length === 0) {
      return setSearchResults([]);
    }

    setSearchResults(filteredPosts);
  };

  return (
    <>
      <div className="relative">
        <Input
          type="text"
          placeholder="Search"
          className="w-80 mt-8 "
          onChange={handleSearch}
        />
        {searchResults.length > 0 && (
          <div className="absolute mt-1 w-full bg-white shadow-lg rounded-md overflow-hidden z-10">
            {searchResults.map((post) => (
              <Link href={`/posts/${post.slug}`}>
                <div
                  key={post.id}
                  className="px-4 py-2 border-b border-gray-200 flex gap-4"
                >
                  <img
                    src={post.feature_image ?? ""}
                    alt=""
                    className="w-[40px] h-[40px] rounded-md"
                  />
                  <h3 className="font-medium">{post.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Search;
