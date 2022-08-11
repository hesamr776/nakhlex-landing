import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import { Image, Grid, Text } from '@nextui-org/react';

import { RegisterForm } from '../components/RegisterForm';
import { Market } from '../components/Market';
import { Features } from '../components/Features';
import { Socials } from '../components/Socials';

const Homepage = () => {
  const { t } = useTranslation('common');

  return (
    <>
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

        <Grid xs={12} sm={5} direction="column">
          <Text h2 size={20} color="#342779" css={{ lh: '36px' }}>
            {t('tradeCrypto')}
          </Text>

          <Text h1 size={48} color="#6554C0" css={{ lh: '105%' }}>
            {t('firstLocal')}
          </Text>

          <RegisterForm />

          <Socials />
        </Grid>

        <Grid xs={0} sm={7}>
          <Image
            css={{ mw: 710 }}
            alt="Nakhlex Exchange"
            src="/illustration.png"
            objectFit="fill"
          />
        </Grid>
      </Grid.Container>

      <Market />
      <Features />
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: 'en' | 'ar' }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default Homepage;
