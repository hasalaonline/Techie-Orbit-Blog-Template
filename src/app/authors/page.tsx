import Authors from "@/components/organisms/Authors";
import Header from "../../components/organisms/Header";
import Footer from "../../components/organisms/footer";

const AuthorsPage = () => {
  return (
    <>
      <Header />
      <h2 className="font-bold text-4xl text-center mb-4 mt-20 mx-auto">Meet the Team</h2>
      <Authors />
      <Footer />
    </>
  );
};

export default AuthorsPage;
