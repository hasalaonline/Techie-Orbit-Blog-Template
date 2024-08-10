"use client";
import Header from "../../components/organisms/Header";
import Footer from "../../components/organisms/footer";
import PostPage from "../../components/organisms/SinglePost";
import { useQuery } from "@tanstack/react-query";
import { TailSpin } from "react-loader-spinner";

const PostDetail = ({ params }: { params: any }) => {
  const { slug } = params;

  const { data, isLoading, error } = useQuery({
    queryKey: [slug],
    queryFn: async () => {
      const response = await fetch(`/api/post?slug=${slug}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  const post = data?.[0];

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

  if (!post) return <p>No data found</p>;

  return (
    <>
      <Header />
      <PostPage post={post} />
      <Footer />
    </>
  );
};

export default PostDetail;
