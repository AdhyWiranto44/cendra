import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Cendra - A Twitter Clone</title>
        <script src="https://kit.fontawesome.com/3ea5609daf.js" crossOrigin="anonymous" async />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
