import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0075FF" />
        <meta
          name="description"
          content="Assessment streamline made more accurate and time-bound"
        />
        <meta
          name="keywords"
          content="..."
        />
        <meta property="og:site_name" content="Flip CBT" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://flipcbt.com/" />
        <meta
          property="og:description"
          content="Assessment streamline made more accurate and time-bound."
        />
        <meta property="og:image" content="/icon.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="Assessment streamline made more accurate and time-bound."
        />
        <meta name="twitter:site" content="@flipcbt" />
        <meta
          name="twitter:title"
          content="Flipcbt"
        />
        <meta name="twitter:creator" content="@flipcbt" />
        <meta property="og:url" content="https://flipcbt.com/" />
        <meta name="twitter:image" content="/icon.png" />

        <link rel="shortcut icon" href="/icon.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&amp;display=swap" 
          rel="stylesheet" 
        />
      </Head>
      
      <Component {...pageProps} />
      
    </div>
  )
}

export default MyApp
