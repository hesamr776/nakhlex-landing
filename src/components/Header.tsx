import Head from 'next/head';
import { Col, Row, Text, Grid, Image, Link, Button } from '@nextui-org/react';

import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { Menu } from './Menu';
import { SelectLanguage } from './SelectLanguage';
import { useLocalLink } from '../hooks/useLocalLink';
import { GAEvent } from '../hooks/useFirebase';

export const Header = () => {
  const { t } = useTranslation('common');
  const { route } = useRouter();

  return (
    <header
      style={{
        marginBottom: 'auto',
        width: '100%',
      }}
    >
      <Head>
        <title>
          Nakhlex {route === '/' ? '| Landing' : route.replace('/', ' | ')}
        </title>
      </Head>

      <Row align="center" justify="space-between">
        <Grid xs={12} sm={4}>
          <Link href={useLocalLink('/')}>
            <Image
              src="/images/logo.png"
              alt="Nakhlex logo"
              height={62}
              width={160}
            />
          </Link>
        </Grid>

        <Grid xs={6} sm={0}>
          <DownloadButton />
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

              <Link href={useLocalLink('/#Market')}>
                <Text>{t('market')}</Text>
              </Link>

              <Link href={useLocalLink('/#Benefits')}>
                <Text>{t('features')}</Text>
              </Link>

              <Link href={useLocalLink('/#Features')}>
                <Text>{t('featuresFull')}</Text>
              </Link>

              <SelectLanguage />
              <DownloadButton />
            </Row>
          </Col>
        </Grid>
      </Row>
    </header>
  );
};

const DownloadButton = () => {
  const { t } = useTranslation('common');

  return (
    <Button
      onPress={() => {
        GAEvent('App-Download-CTA');
      }}
      size="xs"
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
      }}
    >
      <Link
        href="https://bit.ly/3yP4JvB"
        target="_blank"
        css={{ bg: '$accents0', px: '$10', py: '$8' }}
      >
        <Text weight="bold" color="$primary">
          {t('downloadApp')}
        </Text>
      </Link>
    </Button>
  );
};
