import React from 'react';
import i18nextConfig from '../../next-i18next.config';

import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

import { CssBaseline } from '@nextui-org/react';
import Script from 'next/script';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles]),
    };
  }

  render() {
    const currentLocale =
      this.props.__NEXT_DATA__.locale || i18nextConfig.i18n.defaultLocale;

    return (
      <Html
        lang={currentLocale}
        style={{ scrollBehavior: 'smooth' }}
        dir={currentLocale === 'en' ? 'ltr' : 'rtl'}
      >
        <Head>
          {CssBaseline.flush()}
          <meta
            name="title"
            content="نخلِکس أول منصة محلیة للعملات المشفرة  في العراق"
          />
          <meta
            name="description"
            content="نخلِکس هي إحدی المنصات الموثوقة في العراق لبيع و شراء معظم العملات الرقمية مثل التيثر، إيثريوم، لايتکوين، إکس آر بي، ثيرون و غيرها"
          />

          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-G3SGN102Z9"
          ></Script>
          <Script
            strategy="afterInteractive"
            id="GTag"
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-G3SGN102Z9')`,
            }}
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
