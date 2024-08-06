"use client";
import Posts from "@/components/organisms/Posts";
import Header from "../../../components/organisms/Header";
import Footer from "../../../components/organisms/footer";

const TagDetails = ({ params }: { params: any }) => {
  const { slug } = params;

  const filter = `&filter=tag:${slug}`;
  
  return (
    <>
      <Header />
      <Posts filter = { filter } title = { slug } />
      <Footer />
    </>
  );
};

export default TagDetails;
