import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';

import { Grid } from '@nextui-org/react';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { useWindowSize } from '../hooks/dimensions';

import { KYCTimer } from '../components/KYCTimer';

function MyApp({ Component, pageProps }: AppProps) {
  const { height } = useWindowSize();

  return (
    <>
      <KYCTimer />

      <Grid
        css={{
          '@sm': { mx: '$12' },
          '@md': { mx: '$28' },
          height: (height || 400) - 16,
          d: 'flex',
          fd: 'column',
        }}>
        <Header />

        <main
          style={{
            padding: '0px 8px',
            flex: 1,
          }}>
          <Component {...pageProps} />
        </main>

        <Footer />
      </Grid>
    </>
  );
}

export default appWithTranslation(MyApp);
