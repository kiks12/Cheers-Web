
/*

Cheers - Single Bar Page Review Page
Last Updated: Dec. 30, 2021
Tolentino, Francis James S.

*/


import { useRouter } from "next/dist/client/router";


import Head from "next/dist/shared/lib/head";


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

      <main className='md:mx-5 sm:mx-5 lg:container lg:mx-auto h-full py-16 flex flex-col items-center'>
        
        <PageBar barName={bar} isFeatured={true} active='reviews' />

        <div className='w-full mt-5 h-16 border rounded-md flex items-center p-3'>
          <input
            className='h-full bg-white border p-2 lg:w-1/4 md:w-1/3 sm:w-full rounded-full text-sm'
            placeholder='Add a review'
          />
        </div>

        {dummyReviews && dummyReviews.map((review) => <Review key={review} />)}
      </main>
    </>
  );
};

export default Bar;
