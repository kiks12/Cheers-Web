
/*

Cheers - Index Page
Last Updated: Jan. 21, 2022
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
import Filter from "../src/Components/Feed/FeedFilter/Filter";
import SortBy from "../src/Components/SortByComponent/SortBy";


const SORTING_VALUES = ["Location", "Reviews"];


const Home: NextPage = () => {

  const topOfPage = useTopOfPage();

  const { status } = useSession();


  const sortingHandler = (e:any, setter: React.Dispatch<React.SetStateAction<string>>) => {
    setter(e.target.value);
  }


  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      {status !== "loading" && (
        <>
          <main className='lg:container md:mx-5 sm:mx-5 lg:mx-auto h-full py-16 flex flex-col items-center'>
            <Featured />

            <div className="w-full flex flex-col items-center mt-10">
                <Filter />

                <div className="w-full">
                    <div className="lg:w-1/4 md:w-1/3 sm:w-full">
                        <SortBy values={SORTING_VALUES} handler={sortingHandler}/>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-2 w-full">
                    <Feed />
                </div>
            </div>

            {topOfPage !== 0 && <ScrollToTopButton />}
          </main>
          <Footer />
        </>
      )}
      
    </>
  );
};

export default Home;
