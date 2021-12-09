import { NextRouter, useRouter } from "next/dist/client/router";
import Head from "next/dist/shared/lib/head";
import PageBar from "../../../src/Components/SingleBarPage/PageBar";

const images = [
  "Image 1",
  "Image 2",
  "Image 3",
  "Image 4",
  "image 5",
  "ad",
  "sdf",
  "sdafsd",
  "sdfas",
];

const Photos = () => {
  const router: NextRouter = useRouter();
  const { bar } = router.query;

  return (
    <>
      <Head>
        <title>{bar}</title>
      </Head>
      <main className='md:mx-5 sm:mx-5 lg:container lg:mx-auto h-full py-16 flex flex-col items-center'>
        <PageBar barName={bar} isFeatured={true} active='photos' />

        <div className='mt-5 flex w-full flex-wrap'>
          {images ? (
            images.map((image) => {
              return (
                <div
                  key={image}
                  className='lg:w-1/4-m-1 md:w-1/3-m-1 sm:w-1/2-m-1 mr-1 mt-1 bg-gray-300 lg:h-56 md:h-64 sm:h-36 cursor-pointer hover:shadow-md flex items-center justify-center rounded-lg border border-transparent hover:border-white'>
                  {image}
                </div>
              );
            })
          ) : (
            <p>No Photos to show</p>
          )}
        </div>
      </main>
    </>
  );
};

export default Photos;
