
/*

Cheers - Index Page
Last Updated: Dec. 30, 2021
Tolentino, Francis James S.

*/


import Head from "next/head";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";


import Featured from "../src/Components/Feed/Featured";
import Feed from "../src/Components/Feed/Feed";
import ScrollToTopButton from "../src/Components/ScrollToTop/ScrollToTopButton";
import Footer from "../src/Components/Footer/Footer";


import useTopOfPage from "../src/Custom-Hooks/useTopOfPage";


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
