import { Image, Link, Text, Grid, Row, Col } from '@nextui-org/react';
import { useTranslation } from 'next-i18next';

import { GAEvent } from '../hooks/useFirebase';
import { RegisterForm } from './RegisterForm';

export const DownloadApp = () => {
  const { t } = useTranslation();

  return (
    <Grid.Container
      id="DownloadApp"
      justify="space-around"
      css={{
        bg: '$primary',
        borderRadius: 24,
        mw: 1136,
        h: 450,
        mt: 120,
        mb: 80,
        mx: 'auto',
        px: '$17',
        pt: '$12',
        '@smMax': {
          h: 860,
          mt: 250,
          w: '100%',
          mw: 375,
          px: '$4',
          pb: '$0',
        },
      }}>
      <Grid
        xs={12}
        sm={0}
        css={{
          position: 'relative',
        }}>
        <Image
          src="/images/mobile-mock.png"
          alt="Download Nakhlex"
          containerCss={{
            position: 'absolute',
            top: -148,
            right: -15,
            overflow: 'visible',
          }}
          css={{ mw: 656, width: '110%' }}
        />
      </Grid>

      <Grid xs={12} sm={6} justify="center">
        <Col>
          <Text
            size={36}
            color="$white"
            weight="bold"
            css={{ '@smMax': { fs: 24, mt: 245, ta: 'center' } }}>
            {t('downloadNakhlex')}
          </Text>

          <Text
            size={24}
            css={{ pb: '$14', lh: '$lg', '@smMax': { fs: 20, ta: 'center' } }}
            color="$white">
            {t('downloadNakhlexHint')}
          </Text>

          <Row
            align="center"
            justify="flex-start"
            css={{ '@smMax': { flexDirection: 'column' } }}>
            <Link
              onClick={() => {
                GAEvent('store', { store: 'google-play' });
              }}
              href="https://bit.ly/3yP4JvB"
              target="_blank">
              <Image
                width={160}
                height={47}
                src="/images/google-play.png"
                alt="nakhlex google play"
                objectFit="cover"
                containerCss={{ '@smMax': { width: 236, height: 67 } }}
              />
            </Link>

            {/* <Col>
              <Link
                onClick={() => {
                  GAEvent('store', { store: 'app-store' });
                }}
                // href="https://play.google.com/store/apps/details?id=com.nakhlex.exchange"
                // target="_blank"
              >
                <Image
                  width={160}
                  height={47}
                  src="/images/app-store.png"
                  alt="nakhlex app store"
                  objectFit="cover"
                />
              </Link>
            </Col> */}

            <Link
              css={{ m: '$4' }}
              onClick={() => {
                GAEvent('store', { store: 'pwa-button' });
              }}
              href="https://web.nakhlex.com"
              target="_blank">
              <Image
                width={160}
                height={47}
                src="/images/pwa-button.png"
                alt="nakhlex pwa"
                objectFit="cover"
                containerCss={{ '@smMax': { width: 236, height: 67 } }}
              />
            </Link>
          </Row>

          <RegisterForm />
        </Col>
      </Grid>

      <Grid
        xs={0}
        sm={6}
        css={{
          position: 'relative',
        }}>
        <Image
          src="/images/mobile-mock.png"
          alt="Download Nakhlex"
          containerCss={{
            position: 'absolute',
            top: -115,
            right: 0,
            overflow: 'visible',
          }}
          css={{ mw: 656, width: '110%' }}
        />
      </Grid>
    </Grid.Container>
  );
};
