import Head from 'next/head';
import Navhar from '../src/Components/navbar';
import Featured from '../src/Components/Featured';

export default function Home() {
  return (
   <>
    <Head>
      <title>Home</title>
    </Head>
    <Navhar />
    <main className="container mx-auto h-screen py-3">
      <Featured />
    </main>
   </> 
  )
}
