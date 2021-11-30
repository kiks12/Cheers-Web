import "../styles/out.css";
import "../styles/globals.css";

interface myAppProps {
  Component: any;
  pageProps: any;
}

const MyApp = ({ Component, pageProps } : myAppProps) => {
  return <Component {...pageProps} />
}

export default MyApp
