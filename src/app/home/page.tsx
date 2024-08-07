import Header from "../../components/organisms/Header";
import Footer from "../../components/organisms/footer";
import Hero from "../../components/organisms/Hero";
import Posts from "../../components/organisms/Posts";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <h2 className="font-bold text-xl mb-4 text-center sm:text-left">
          { "Latest Stories" }
        </h2>
      <Posts />
      <Footer />
    </>
  );
}
