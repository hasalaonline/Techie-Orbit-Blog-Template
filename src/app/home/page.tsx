import Header from "../../components/organisms/Header";
import Footer from "../../components/organisms/footer";
import Hero from "../../components/organisms/Hero";
import Posts from "../../components/organisms/Posts";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <h2 className="font-bold text-xl text-center mx-auto">
          { "Latest Stories" }
        </h2>
      <Posts />
      <Footer />
    </>
  );
}
