import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';

import { Grid } from '@nextui-org/react';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Grid css={{ '@sm': { mx: '$12' }, '@md': { mx: '$28' } }}>
      <Header />

      <main style={{ padding: '0px 8px' }}>
        <Component {...pageProps} />
      </main>

      <Footer />
    </Grid>
  );
}

export default appWithTranslation(MyApp);
