import { Image, Link, Text, Grid, Row, Col } from '@nextui-org/react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { GAEvent } from '../hooks/useFirebase';
import { languages } from './SelectLanguage';

export const DownloadApp = () => {
  const { t } = useTranslation();
  const { locale } = useRouter();

  const { isRTL } = languages[locale as 'ar' | 'ku' | 'en'];

  return (
    <section id="DownloadApp">
      <Grid.Container
        alignItems="center"
        justify="space-around"
        css={{
          border: '1px solid black',
          borderRadius: 12,
          mb: 80,
          px: 11,
          mt: 120,
          w: 'calc(100% - 200px)',
          mr: isRTL ? 200 : 0,
          ml: isRTL ? 0 : 200,
          pb: 0,
          '@smMax': { mt: 250, mr: 0, ml: 0, w: '100%', pb: 40 },
        }}>
        <Grid
          xs={12}
          sm={4}
          css={{
            mt: -46,
            mr: isRTL ? -220 : 0,
            ml: isRTL ? 0 : -220,
            '@smMax': { mt: -200, mr: 0, ml: 0, mb: '$10' },
          }}>
          <Image
            src="/images/download.png"
            alt="Download Nakhlex"
            css={{ mw: 330 }}
          />
        </Grid>

        <Grid xs={12} sm={4} justify="center">
          <Text size={32} color="$primary" weight="bold" css={{ mw: 260 }}>
            {t('downloadNakhlex')}
          </Text>
        </Grid>

        <Grid xs={12} sm={4} direction="column" alignItems="center">
          <Text size={14} css={{ pt: '$8', pb: '$12', lh: '$lg' }}>
            {t('downloadNakhlexHint')}
          </Text>

          <Row css={{ mw: 330 }}>
            <Col>
              <Link
                onClick={() => {
                  GAEvent('store', { store: 'app-store' });
                  console.log('app-store');
                }}
                href="https://play.google.com/store/apps/details?id=com.nakhlex.exchange"
                target="_blank">
                <Image
                  src="/images/app-store.png"
                  alt="nakhlex app store"
                  objectFit="cover"
                />
              </Link>
            </Col>

            <Col>
              <Link
                onClick={() => {
                  GAEvent('store', { store: 'google-play' });
                  console.log('google-play');
                }}
                href="https://play.google.com/store/apps/details?id=com.nakhlex.exchange"
                target="_blank">
                <Image
                  src="/images/google-play.png"
                  alt="nakhlex google play"
                  objectFit="cover"
                />
              </Link>
            </Col>
          </Row>
        </Grid>
      </Grid.Container>
    </section>
  );
};
