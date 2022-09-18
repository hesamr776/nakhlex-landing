import { useTranslation } from 'next-i18next';

import { Grid, Link, Row, Text } from '@nextui-org/react';

import { useLocalLink } from '../hooks/useLocalLink';

export const Footer = () => {
  const { t } = useTranslation('common');

  return (
    <footer
      style={{
        marginTop: 'auto',
        width: '100%',
        paddingBottom: 60,
      }}>
      <Grid.Container>
        <Grid xs={12} sm={0} css={{ mb: '$10' }}>
          <Row justify="space-around" align="center">
            <Link href={useLocalLink('/aboutUs')} color="text">
              {t('aboutUs')}
            </Link>

            {/* <Link href={useLocalLink('/FAQ')} color="text">
              {t('FAQ')}
            </Link> */}

            <Link href={useLocalLink('/contactUs')} color="text">
              {t('contactUs')}
            </Link>

            <Link href={useLocalLink('/legalAndPrivacy')} color="text">
              {t('legalAndPrivacy')}
            </Link>
          </Row>
        </Grid>

        <Grid xs={12} sm={0} justify="center">
          <Text i color="$gray600">
            {t('madeInIraq')}
          </Text>
        </Grid>

        <Grid xs={0} sm={6} justify="flex-start">
          <Text i color="$gray600">
            {t('madeInIraq')}
          </Text>
        </Grid>

        <Grid xs={0} sm={6} justify="flex-end">
          <Row justify="space-between" align="center" css={{ mw: 600 }}>
            <Link href={useLocalLink('/aboutUs')} color="text">
              {t('aboutUs')}
            </Link>

            {/* <Link href={useLocalLink('/FAQ')} color="text">
              {t('FAQ')}
            </Link> */}

            <Link href={useLocalLink('/contactUs')} color="text">
              {t('contactUs')}
            </Link>

            <Link href={useLocalLink('/legalAndPrivacy')} color="text">
              {t('legalAndPrivacy')}
            </Link>
          </Row>
        </Grid>
      </Grid.Container>
    </footer>
  );
};
