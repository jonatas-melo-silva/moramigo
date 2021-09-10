import type { AppProps } from 'next/app';

import ContextProvider from "../contexts";

import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}

export default MyApp;
