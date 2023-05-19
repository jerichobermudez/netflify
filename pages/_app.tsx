import type { AppProps } from 'next/app'
import '@/styles/globals.css';
import Head from 'next/head';

export default function App({
  Component,
  pageProps: {
    session,
    ...pageProps
  }
}: AppProps) {
  return (
    <>
      <Head>
        <title>Netflify</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
