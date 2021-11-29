import Head from 'next/head';
import Navhar from '../src/Components/navbar';
import Featured from '../src/Components/Featured';
import Feed from '../src/Components/Feed';

export default function Home() {
  return (
   <>
    <Head>
      <title>Home</title>
    </Head>
    <Navhar />
    <main className="lg:container md:container sm:mx-5 lg:mx-auto md:mx-auto h-screen py-16 flex flex-col items-center">
      <Featured />
      <Feed />
    </main>
   </> 
  )
}
