
/*

Cheers - Single Bar Page Review Page
Last Updated: Jan. 21, 2022
Tolentino, Francis James S.

*/


import { useRouter } from "next/dist/client/router";


import Head from "next/dist/shared/lib/head";


import Feed from "../../../src/Components/Feed/Feed";
import BarPageSkeleton from "../../../src/Components/SingleBarPage/BarPageSkeleton";
import PageBar from "../../../src/Components/SingleBarPage/PageHeader";
import Review from "../../../src/Components/SingleBarPage/Review";


const dummyReviews = [
  "sdf",
  "asdf",
  "sdfsdd",
  "sasfsd",
  "sdfs",
  "asfasd",
  "sdfasdf",
];


const Bar = () => {

  const router = useRouter();

  const { bar } = router.query;

  return (
    <>
      <Head>
        <title>{bar}</title>
      </Head>


      <BarPageSkeleton>
          <div className="col-span-2">
              <PageBar barName={bar} isFeatured={true} active='reviews' />

              <div className='w-full mt-5 h-16 border rounded-md flex items-center p-3'>
                  <input
                    className='h-full bg-white border p-2 lg:w-1/4 md:w-1/3 sm:w-full rounded-full text-sm'
                    placeholder='Add a review'
                  />
              </div>

              {dummyReviews && dummyReviews.map((review) => <Review key={review} />)}
          </div>

          <div>
              <Feed />
          </div>
      </BarPageSkeleton>
    </>
  );
};

export default Bar;
