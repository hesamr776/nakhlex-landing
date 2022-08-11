import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';

import { Container } from '@nextui-org/react';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { useWindowSize } from '../hooks/dimensions';

function MyApp({ Component, pageProps }: AppProps) {
  const { height } = useWindowSize();

  return (
    <Container css={{ height: (height || 400) - 16, d: 'flex' }}>
      <Header />

      <main style={{ padding: '16px 0' }}>
        <Component {...pageProps} />
      </main>

      <Footer />
    </Container>
  );
}

export default appWithTranslation(MyApp);
