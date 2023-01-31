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

      <Row
        align="center"
        justify="space-between"
        css={{ mw: 1136, mx: 'auto' }}
      >
        <Grid xs={12} sm={8}>
          <Row justify="space-between" align="center" css={{ mw: 450 }}>
            <Link href={useLocalLink('/')}>
              <Image
                src="/images/logo.png"
                alt="Nakhlex logo"
                height={62}
                width={160}
              />
            </Link>

            <Row justify="space-between" align="center" css={{ mw: 200 }}>
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
            </Row>
          </Row>
        </Grid>

        <Grid xs={6} sm={0}>
          <DownloadButton />
          <Menu />
        </Grid>

        <Grid xs={0} sm={4} justify="flex-end">
          <Col css={{ mw: 320 }}>
            <Row justify="flex-end" align="center">
              <SelectLanguage />
              <Link
                css={{
                  borderWidth: 0,
                  borderRightWidth: 1,
                  borderColor: '$secondaryLight',
                  borderStyle: 'solid',
                  mr: '$10',
                  ml: '$4',
                  pr: '$10',
                }}
              >
                <Image
                  src="/images/facebook.png"
                  alt="nakhlex facebook"
                  width={30}
                  height={30}
                  objectFit="cover"
                />
              </Link>

              <Link
                css={{
                  borderWidth: 0,
                  borderLeftWidth: 1,
                  borderColor: '$secondaryLight',
                  borderStyle: 'solid',
                  ml: '$10',
                  m4: '$4',
                  pl: '$10',
                }}
              >
                <Image
                  src="/images/whatsapp.png"
                  alt="nakhlex whatsapp"
                  width={30}
                  height={30}
                  objectFit="cover"
                />
              </Link>

              <DownloadButton />
            </Row>
          </Col>
        </Grid>
      </Row>
    </header>
  );
};

const DownloadButton = () => {
  return (
    <Link href={useLocalLink('/#DownloadApp')}>
      <Image
        src="/images/iPhone.png"
        alt="nakhlex download links"
        width={30}
        height={30}
        objectFit="cover"
      />
    </Link>
  );
};
