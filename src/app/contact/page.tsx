"use client";
import Header from "../../components/organisms/header";
import Footer from "../../components/organisms/footer";

const Contact = ({ params }: { params: any }) => {
  const { slug } = params;

  return (
    <>
      <Header />
      <h2 className="flex items-center justify-center h-screen">
        Coming Soon....
      </h2>
      <Footer />
    </>
  );
};

export default Contact;
