/* eslint-disable @next/next/no-page-custom-font */
import "../styles/out.css";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import Layout from "../src/Components/Header/layout";
import { ActivePageProvider } from "../src/Custom-Hooks/useActivePage";

interface myAppProps {
  Component: any;
  pageProps: any;
}

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: myAppProps) => {
  return (
    <>
      <Head>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
        />
      </Head>
      <SessionProvider session={session}>
        <ActivePageProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ActivePageProvider>
      </SessionProvider>
    </>
  );
};

export default MyApp;
