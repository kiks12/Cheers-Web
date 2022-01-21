
/*

Cheers - Single Bar Page Upcoming Events Page
Last Updated: Jan. 21, 2022
Tolentino, Francis James S.

*/

import { useRouter } from "next/dist/client/router";


import Head from "next/dist/shared/lib/head";


import Feed from "../../../src/Components/Feed/Feed";
import BarPageSkeleton from "../../../src/Components/SingleBarPage/BarPageSkeleton";
import PageBar from "../../../src/Components/SingleBarPage/PageHeader";


const UpcomingEvents = () => {
  
  const router = useRouter();
  const { bar } = router.query;


  return (
    <>
      <Head>
        <title>{bar}</title>
      </Head>


      <BarPageSkeleton>
          <div className="col-span-2">
              <PageBar barName={bar} isFeatured={true} active='upcomingEvents' />
          </div>

          <div>
              <Feed />
          </div>
      </BarPageSkeleton>

    </>
  );
};

export default UpcomingEvents;
