
/*

Cheers - Single Bar Page Upcoming Events Page
Last Updated: Dec. 30, 2021
Tolentino, Francis James S.

*/

import { useRouter } from "next/dist/client/router";


import Head from "next/dist/shared/lib/head";


import PageBar from "../../../src/Components/SingleBarPage/PageHeader";

const UpcomingEvents = () => {
  
  const router = useRouter();
  const { bar } = router.query;


  return (
    <>
      <Head>
        <title>{bar}</title>
      </Head>

      <main className='md:mx-5 sm:mx-5 lg:container lg:mx-auto h-full py-16 flex flex-col items-center'>

        <PageBar barName={bar} isFeatured={true} active='upcomingEvents' />

      </main>
    </>
  );
};

export default UpcomingEvents;
