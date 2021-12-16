import Head from "next/head";
import Featured from "../src/Components/Feed/Featured";
import Feed from "../src/Components/Feed/Feed";
import { NextPage } from "next";
import useTopOfPage from "../src/Custom-Hooks/useTopOfPage";
import ScrollToTopButton from "../src/Components/ScrollToTop/ScrollToTopButton";
import { useSession } from "next-auth/react";
import Footer from "../src/Components/Footer/Footer";

const Home: NextPage = () => {
  const topOfPage = useTopOfPage();
  const { status } = useSession();
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      {status !== "loading" && (
        <>
          <main className='lg:container md:mx-5 sm:mx-5 lg:mx-auto h-full py-16 flex flex-col items-center'>
            <Featured />
            <Feed />
            {topOfPage !== 0 && <ScrollToTopButton />}
          </main>
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
