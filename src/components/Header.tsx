import Head from 'next/head';
import { Col, Row, Text, Grid, Image, Link } from '@nextui-org/react';

import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { Menu } from './Menu';
import { SelectLanguage } from './SelectLanguage';

export const Header = () => {
  const { t } = useTranslation();
  const { route } = useRouter();

  return (
    <header
      style={{
        marginBottom: 'auto',
        width: '100%',
        paddingTop: 8,
      }}
    >
      <Head>
        <title>
          Nakhlex {route === '/' ? '| Landing' : route.replace('/', ' | ')}
        </title>
      </Head>

      <Row align="center" justify="space-between">
        <Grid xs={9} sm={4}>
          <Link href="/">
            <Image src="/logo.png" alt="Nakhlex logo" height={40} width={120} />
          </Link>
        </Grid>

        <Grid xs={2} sm={0}>
          <Menu />
        </Grid>

        <Grid xs={0} sm={8} justify="flex-end">
          <Col css={{ mw: 600 }}>
            <Row justify="space-between" align="center">
              {route !== '/' && (
                <Link href="/">
                  <Text>{t('home')}</Text>
                </Link>
              )}

              <Link href="/#Features">
                <Text>{t('features')}</Text>
              </Link>

              <Link href="/#Market">
                <Text>{t('market')}</Text>
              </Link>

              <SelectLanguage />

              <Link
                href="/#DownloadApp"
                css={{
                  w: 140,
                  h: 40,
                  d: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  background: 'rgba(0, 76, 255, 0.06)',
                  border: '1px solid #004CFF',
                  boxShadow: ' 0px 2px 4px rgba(0, 0, 0, 0.1)',
                  borderRadius: '8px',
                }}
              >
                <Text weight="bold" color="#0F56FF">
                  {t('downloadApp')}
                </Text>
              </Link>
            </Row>
          </Col>
        </Grid>
      </Row>
    </header>
  );
};
