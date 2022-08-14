import Head from 'next/head';
import { Col, Row, Text, Button, Grid, Image, Link } from '@nextui-org/react';

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
        // paddingRight: 16,
      }}
    >
      <Head>
        <title>Nakhlex {route.replace('/', ' | ')}</title>
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
              <Text>{t('features')}</Text>

              <Text>{t('market')}</Text>

              <SelectLanguage />

              <Button bordered color="primary">
                {t('downloadApp')}
              </Button>
            </Row>
          </Col>
        </Grid>
      </Row>
    </header>
  );
};
