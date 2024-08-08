"use client";
import Posts from "@/components/organisms/Posts";
import Header from "../../../components/organisms/Header";
import Footer from "../../../components/organisms/footer";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { TailSpin } from "react-loader-spinner";
import { AvatarFallback, Avatar, AvatarImage } from "@/components/atoms/avatar";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

const AuthorDetails = ({ params }: { params: any }) => {
  const queryClient = useQueryClient();

  queryClient.removeQueries({ queryKey: ['posts'] });
  
  const { slug } = params;

  const filter = `&filter=author:${slug}`;

  const { data, isLoading, error } = useQuery({
    queryKey: [slug, filter],
    queryFn: async () => {
      const response = await fetch(`/api/author?slug=${slug}`);
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
      <Avatar className="mx-auto w-20 h-20 mt-10 mb-10">
        <AvatarImage src={data[0]?.profile_image} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <h2 className="font-bold text-4xl text-center mb-4 ml-60">
        {data[0]?.name}
      </h2>
      <p className="text-center text-gray-500">{data[0]?.bio}</p>
      <div className="mt-4 flex justify-center space-x-4">
        {data[0]?.twitter && (
          <Link
            href={data[0].twitter}
            aria-label={`${data[0]?.name}'s Twitter`}
          >
            <FaXTwitter />
          </Link>
        )}
        {data[0]?.facebook && (
          <Link
            href={data[0].facebook}
            aria-label={`${data[0]?.name}'s Facebook`}
          >
            <FaFacebook />
          </Link>
        )}
        {data[0]?.website && (
          <Link href={data[0].website} aria-label={`${data[0]?.name}'s Website`}>
            <AiOutlineGlobal />
          </Link>
        )}
      </div>

      <Posts filter={filter} />
      <Footer />
    </>
  );
};

export default AuthorDetails;
