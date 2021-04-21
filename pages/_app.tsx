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
        description="Hello! I'm Jonathan Mann! I've been writing, producing and sharing a Song A Day for 12 years. Now I'm making each one available as a unique NFT for the first time."
        twitter={{
          cardType: 'summary_large_image',
          handle: '@songadaymann',
          site: 'RMXD',
        }}
        openGraph={{
          images: [{ url: 'https://songaday.world/generated/1.png' }],
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
