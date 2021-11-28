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
    <main className="container mx-auto h-screen py-3 flex flex-col items-center">
      <Featured />
      <Feed />
    </main>
   </> 
  )
}
