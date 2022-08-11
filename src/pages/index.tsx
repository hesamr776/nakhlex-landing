import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import { Image, Grid, Col, Text } from '@nextui-org/react';

import { RegisterForm } from '../components/RegisterForm';

const Homepage = () => {
  const { t } = useTranslation('common');

  return (
    <Grid.Container
      gap={1}
      justify="center"
      alignItems="center"
      color="$primary"
    >
      <Grid xs={12} sm={0}>
        <Image
          alt="Nakhlex Exchange"
          src="/illustration.png"
          objectFit="fill"
        />
      </Grid>

      <Grid xs={12} sm={5}>
        <Col>
          <Text h2 color="$blue700">
            {t('tradeCrypto')}
          </Text>
          <Text h1 color="primary">
            {t('firstLocal')}
          </Text>

          <RegisterForm />
        </Col>
      </Grid>

      <Grid xs={0} sm={7}>
        <Image
          css={{ mw: 760 }}
          alt="Nakhlex Exchange"
          src="/illustration.png"
          objectFit="fill"
        />
      </Grid>
    </Grid.Container>
  );
};

export const getStaticProps = async ({ locale }: { locale: 'en' | 'ar' }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default Homepage;
