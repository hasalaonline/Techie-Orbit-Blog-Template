'use client';
import React, { useState } from 'react';
import { Input } from '../atoms/input';
import { useQuery } from '@tanstack/react-query';
import { PostOrPage } from '@tryghost/content-api';
import Link from 'next/link';
import Image from 'next/image';

const Search = () => {
  const [searchResults, setSearchResults] = useState<PostOrPage[]>([]);

  const { data: posts } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const response = await fetch(`/api/search`);
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      return response.json();
    },
  });

  const handleSearch = (e: { target: { value: string } }) => {
    const searchTerm = e.target.value.toLowerCase();

    const filteredPosts =
      posts?.filter(
        (post: { title: string }) =>
          post?.title?.toLowerCase().includes(searchTerm) ?? false,
      ) || [];

    if (searchTerm.length === 0) {
      return setSearchResults([]);
    }

    setSearchResults(filteredPosts);
  };

  return (
    <div className="relative">
      <Input
        type="text"
        placeholder="Search"
        className="w-80 rounded-xl"
        onChange={handleSearch}
      />
      {searchResults.length > 0 && (
        <div className="absolute mt-1 w-full bg-white shadow-lg rounded-md overflow-hidden z-10">
          {searchResults.map((post) => (
            <Link href={`/${post.slug}`} key={post.id}>
              <div className="px-4 py-2 border-b border-gray-200 flex gap-4">
                <Image
                  src={post.feature_image ?? ''}
                  alt=""
                  width={40}
                  height={40}
                  className="w-[40px] h-[40px] rounded-md"
                />
                <h3 className="font-medium">{post.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
