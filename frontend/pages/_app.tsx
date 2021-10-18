// import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app';
import React from 'react';
import SSRProvider from 'react-bootstrap/SSRProvider';
import { NavBar } from '../components/NavBar';
import { AppProvider } from '../store';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <NavBar />
      <SSRProvider>
        <Component {...pageProps} />
      </SSRProvider>
    </AppProvider>
  );
}
export default MyApp;
