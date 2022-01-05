/* eslint-disable @next/next/no-page-custom-font */

/*

Cheers - _app main component
Last Updated: Jan. 5, 2022
Tolentino, Francis James S.

*/


import "../styles/out.css";
import "../styles/globals.css";


import type { AppProps } from "next/app";


import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";


import Navhar from "../src/Components/Header/Navbar/navbar";


import useActivePage from "../src/Custom-Hooks/useActivePage";


const MyApp = ( { Component, pageProps: { session, ...pageProps } }: AppProps) => {

  const router = useRouter();

  const activePage = useActivePage();

    return (
        <>
          <Head>
            <link
              rel='stylesheet'
              href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
            />
          </Head>

          <SessionProvider session={session}>

            {
              router.pathname !== "/login" && <Navhar activePage={activePage}/>
            }
            <Component {...pageProps} />
            
          </SessionProvider>
        </>
    );
};


export default MyApp;