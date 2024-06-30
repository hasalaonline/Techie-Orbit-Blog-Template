"use client";
import Header from "../../../components/organisms/Header";
import Footer from "../../../components/organisms/footer";
import PostPage from "../../../components/organisms/SinglePost";
import { fetchPost } from "../../../lib/api/ghost";
import { Post } from "../../../lib/types/post";
import { useQuery } from "@tanstack/react-query";
import { TailSpin } from "react-loader-spinner";

const PostDetail = ({ params }: { params: any }) => {
  const { slug } = params;

  const { data, isLoading, error } = useQuery({
    queryKey: [slug],
    queryFn: () => fetchPost(slug),
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

  if (!data) return <p>No data found</p>;

  const date = new Date(data?.published_at ?? "");

  const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;

  const post: Post = {
    title: data?.title,
    featuredImage: data?.feature_image,
    date: formattedDate,
    content: data?.html,
    authors: data?.authors,
  };

  return (
    <>
      <Header />
      <PostPage post={post} />
      <Footer />
    </>
  );
};

export default PostDetail;
