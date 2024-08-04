import { Post } from "../../lib/types/post";
import React from "react";
import DOMPurify from "dompurify";
import Image from "next/image";

interface PostPageProps {
  post: Post;
}

const PostPage: React.FC<PostPageProps> = ({ post }) => {
  const sanitizedHtml = DOMPurify.sanitize(post.content ?? "");

  return (
    <>
      <div className="w-full flex justify-center mt-4 sm:mt-20 px-4">
        <div className="w-full max-w-[1000px]">
          <h1 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-10">
            {post.title}
          </h1>
          {post.authors?.map((author, index) => (
            <p key={index} className="text-sm mb-2 sm:mb-4">
              {author.name}
            </p>
          ))}
          <p className="text-sm mb-4">{post.date}</p>
          <Image
            src={post.featuredImage ?? ""}
            alt=""
            width={1000}
            height={500}
            className="w-full rounded-2xl mb-6 sm:mb-8"
          />
          <div
            className="prose prose-sm sm:prose lg:prose-lg"
            dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
          />
        </div>
      </div>
    </>
  );
};

export default PostPage;
