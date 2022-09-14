import { Image, Link, Text, Grid, Row, Col } from '@nextui-org/react';
import { useTranslation } from 'next-i18next';

export const DownloadApp = () => {
  const { t } = useTranslation();

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
          ml: 200,
          pb: 0,
          '@smMax': { mt: 250, ml: 0, w: '100%', pb: 40 },
        }}>
        <Grid
          xs={12}
          sm={4}
          css={{
            mt: -46,
            ml: -220,
            '@smMax': { mt: -200, ml: 0, mb: '$10' },
          }}>
          <Image src="/download.png" alt="Download Nakhlex" css={{ mw: 330 }} />
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
                href="https://www.instagram.com/nakhlex_official/"
                target="_blank">
                <Image
                  src="/app-store.png"
                  alt="nakhlex app store"
                  objectFit="cover"
                />
              </Link>
            </Col>

            <Col>
              <Link
                href="https://www.instagram.com/nakhlex_official/"
                target="_blank">
                <Image
                  src="/google-play.png"
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
