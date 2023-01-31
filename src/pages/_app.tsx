import { Grid, NextUIProvider } from '@nextui-org/react';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

import { useWindowSize } from '../hooks/dimensions';
import { theme } from '../styles/theme';

import '../hooks/useFirebase';
import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  const { height } = useWindowSize();
  const { route } = useRouter();

  return (
    <NextUIProvider theme={theme}>
      <Grid
        css={{
          '@sm': { mx: '$12' },
          '@md': { mx: '$28' },
          height: (height || 400) - 16 - 60,
          d: 'flex',
          fd: 'column',
        }}
      >
        {route !== '/appLegalAndPrivacy' && <Header />}

        <main
          style={{
            padding: '0px 8px',
            flex: 1,
          }}
        >
          <Component {...pageProps} />
        </main>

        {route !== '/appLegalAndPrivacy' && <Footer />}
      </Grid>
    </NextUIProvider>
  );
}

export default appWithTranslation(MyApp);
