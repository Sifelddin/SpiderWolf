import * as React from 'react';

import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';

import { ThemeProvider } from '@mui/material';

// Client-side cache, shared for the whole session of the user in the browser.

const MyApp: React.FC<MyAppProps> = (props) => {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>My App</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;

interface MyAppProps {
  Component: React.ElementType;
  pageProps: object;
}
