import "../styles/global.css";
import { AuthProvider } from '../contexts/auth'

import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
