import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import React from 'react';

import Navbar from '../components/Navbar';
import { Account } from '../containers/Account';
import { theme } from '../lib/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title="RMXD, by Song a Day"
        description="Jonathan Mann has been writing a Song A Day for 4,500 days. On 3.15.21 he sold the first 365 on OpenSea. Just over a week later, fifty Song A Day holders sent their 1/1 NFT to the RMXD wallet address. 10 of those songs were chosen at random to be remixed by Eclectic Method. The holders whose songs were chosen get 40% of all sales of the remix that came from their song, and only 100 copies of each animated remix exist."
        twitter={{
          cardType: 'summary_large_image',
          handle: '@songadaymann',
          site: 'RMXD',
        }}
        openGraph={{
          images: [{ url: 'https://rmxd.songaday.world/meta.png' }],
        }}
      />
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width" />
      </Head>

      <ChakraProvider theme={theme}>
        <Account.Provider>
          <Navbar />
          <Component {...pageProps} />
        </Account.Provider>
      </ChakraProvider>
    </>
  );
}

export default App;
