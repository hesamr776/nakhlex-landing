import { useTranslation } from 'next-i18next';

import { Image, Grid, Text } from '@nextui-org/react';

import { RegisterForm } from '../components/RegisterForm';
import { Socials } from '../components/Socials';

export const Intro = () => {
  const { t } = useTranslation('common');

  return (
    <Grid.Container
      gap={1}
      justify="center"
      alignItems="flex-start"
      color="$primary">
      <Grid xs={12} sm={0}>
        <Image
          css={{ mw: 600 }}
          alt="Nakhlex Exchange"
          src="/illustration.png"
          objectFit="fill"
        />
      </Grid>

      <Grid xs={12} sm={5} direction="column">
        <Text
          h2
          size={20}
          color="$blue700"
          css={{
            lh: '36px',
            '@xsMax': { fs: 16 },
            '@sm': { mt: '$16' },
            '@md': { mt: '$28' },
          }}>
          {t('tradeCrypto')}
        </Text>

        <Text
          h1
          size={48}
          color="$primary"
          css={{ lh: '105%', '@xsMax': { fs: 30 } }}>
          {t('firstLocal')}
        </Text>

        <RegisterForm />

        <Grid xs={0} sm={12}>
          <Socials />
        </Grid>
      </Grid>

      <Grid xs={0} sm={7}>
        <Image
          css={{ mw: 710, pt: -36 }}
          alt="Nakhlex Exchange"
          src="/illustration.png"
          objectFit="fill"
        />
      </Grid>
    </Grid.Container>
  );
};
