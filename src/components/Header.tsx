import Head from 'next/head';
import { Col, Row, Text, Grid, Image, Link } from '@nextui-org/react';

import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { Menu } from './Menu';
import { SelectLanguage } from './SelectLanguage';
import { useLocalLink } from '../hooks/useLocalLink';

export const Header = () => {
  const { t } = useTranslation('common');
  const { route } = useRouter();

  return (
    <header
      style={{
        marginBottom: 'auto',
        width: '100%',
      }}>
      <Head>
        <title>
          Nakhlex {route === '/' ? '| Landing' : route.replace('/', ' | ')}
        </title>
      </Head>

      <Row align="center" justify="space-between">
        <Grid xs={9} sm={4}>
          <Link href={useLocalLink('/')}>
            <Image
              src="/images/logo.png"
              alt="Nakhlex logo"
              height={62}
              width={160}
            />
          </Link>
        </Grid>

        <Grid xs={2} sm={0}>
          <Menu />
        </Grid>

        <Grid xs={0} sm={8} justify="flex-end">
          <Col css={{ mw: 600 }}>
            <Row justify="space-between" align="center">
              {route !== '/' && (
                // eslint-disable-next-line react-hooks/rules-of-hooks
                <Link href={useLocalLink('/')}>
                  <Text>{t('home')}</Text>
                </Link>
              )}

              <Link href={useLocalLink('/#Features')}>
                <Text>{t('features')}</Text>
              </Link>

              <Link href={useLocalLink('/#Market')}>
                <Text>{t('market')}</Text>
              </Link>

              <SelectLanguage />

              <Link
                href={useLocalLink('/#DownloadApp')}
                css={{
                  w: 140,
                  h: 40,
                  d: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  background: 'rgba(0, 102, 153, 0.2)', // #006699

                  border: '1px solid $primary',
                  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                  borderRadius: '8px',
                }}>
                <Text weight="bold" color="$primary">
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
