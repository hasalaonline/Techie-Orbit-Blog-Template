"use client";
import Posts from "@/components/organisms/Posts";
import Header from "../../../components/organisms/Header";
import Footer from "../../../components/organisms/footer";
import { useQuery } from "@tanstack/react-query";
import { TailSpin } from "react-loader-spinner";

const TagDetails = ({ params }: { params: any }) => {
  const { slug } = params;

  const filter = `&filter=tag:${slug}`;

  const { data, isLoading, error } = useQuery({
    queryKey: [slug],
    queryFn: async () => {
      const response = await fetch(`/api/authors?slug=${slug}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
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

  if (!data) return <p>No data found</p>;

  return (
    <>
      <Header />
        <h2 className="font-bold text-4xl text-center mb-4 mt-20 ml-60">Coming Soon...</h2>
      <Footer />
    </>
  );
};

export default TagDetails;
