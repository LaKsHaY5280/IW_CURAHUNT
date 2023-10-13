import Faq from "@/components/Faq";
// import Loader from "@/components/loader";
import Header from "@/container/Header";
import Toplist from "@/container/Toplist";

export default function Home() {
  return (
    <main className="home">
      <Header />
      <Toplist />
      <Faq />
      {/* <Loader /> */}
    </main>
  );
}
