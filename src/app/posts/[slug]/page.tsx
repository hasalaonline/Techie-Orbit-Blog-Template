"use client";
import Header from "@/components/organisms/Header";
import { fetchPost } from "@/lib/api/ghost";
import { useQuery } from "@tanstack/react-query";

interface Props {
  slug: string;
}

const PostDetail = ({ slug }: Props) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [slug],
    queryFn: () => fetchPost(slug),
  });

  return (
    <>
      <Header />
      <h1>{data?.title ?? ""}</h1>
      <div dangerouslySetInnerHTML={{ __html: data?.html ?? "Error" }} />
    </>
  );
};

export default PostDetail;
