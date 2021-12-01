import "../styles/out.css";
import "../styles/globals.css";
import Head from "next/head";

interface myAppProps {
  Component: any;
  pageProps: any;
}

const MyApp = ({ Component, pageProps } : myAppProps) => {
  return (
    <>
    <Head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"/>
    </Head>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
