import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Valorant Random Composition Generator</title>
        <meta
          name="description"
          content="Generate five different agents for you and your friends to play on VALORANT™️"
        />
        <meta name="author" content="madmendes" />
        <meta
          property="og:title"
          content="Valorant Random Composition Generator"
        />
        <meta
          property="og:description"
          content="Generate five different agents for you and your friends to play on VALORANT™️"
        />
        <meta
          property="og:url"
          content="https://valorantrandomcomposition.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index" />
        <meta name="keywords" content="valorant, valorant compositions" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="theme-color" content="#ff4655" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
