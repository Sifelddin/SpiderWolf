import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, useTheme } from '@emotion/react';
import createEmotionCache from '../utils/createEmotionCache';
import { createTheme } from '@mui/system';
import { ColorModProvider } from '../context/ColorModeContext';
import useColorMode from '../hooks/useColorMode';
import { createGenerateClassName, StylesProvider } from '@mui/styles';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
const generateClassName = createGenerateClassName({
  productionPrefix: 'c',
});

export default function MyApp(props: any) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const theme: any = useTheme()

  return (
    <StylesProvider generateClassName={generateClassName}>
      <CacheProvider value={emotionCache}>
        <ColorModProvider>
          <Head>
            <meta name="viewport" content="initial-scale=1, width=device-width" />
            <meta name="theme-color" content={theme?.palette?.primary?.main} />
          </Head>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ColorModProvider>
      </CacheProvider>
    </StylesProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
