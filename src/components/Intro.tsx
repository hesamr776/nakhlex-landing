import { useTranslation } from 'next-i18next';

import { Image, Grid, Text } from '@nextui-org/react';

import { Socials } from '../components/Socials';

export const Intro = () => {
  const { t } = useTranslation('common');

  return (
    <Grid.Container
      gap={1}
      justify="space-between"
      alignItems="flex-start"
      color="$primary"
      css={{
        pt: '$12',
        mw: 1136,
        mx: 'auto',
        height: 450,
        '@smMax': { height: 577, justifyContent: 'center' },
      }}
    >
      <Grid
        xs={12}
        sm={0}
        css={{ position: 'relative', justifyContent: 'center' }}
      >
        <Image
          containerCss={{ mw: 345, position: 'absolute' }}
          alt="Nakhlex Exchange"
          src="/images/illustration-top-mobile.png"
          objectFit="fill"
        />
      </Grid>

      <Grid
        xs={12}
        sm={5}
        direction="column"
        alignItems="flex-start"
        css={{ '@smMax': { alignItems: 'center' } }}
      >
        <Text
          size={20}
          color="$blue700"
          css={{
            lh: '36px',
            '@smMax': { fs: 16, mt: 320 },
            '@sm': { mt: '$16' },
            '@md': { mt: '$20' },
          }}
        >
          {t('tradeCrypto')}
        </Text>

        <Text
          h1
          size={60}
          weight="normal"
          css={{ lh: '105%', '@smMax': { fs: 35 }, wordSpacing: 10 }}
        >
          {t('firstLocal')}
        </Text>
        <Text
          h2
          weight="bold"
          size={60}
          css={{ lh: '105%', '@smMax': { fs: 35 } }}
        >
          {t('firstLocal2')}
        </Text>

        <Socials />
      </Grid>

      <Grid xs={0} sm={6} css={{ position: 'relative' }}>
        <Image
          containerCss={{
            mw: 825,
            w: '147%',

            position: 'absolute',
            left: 0,
            top: 0,
          }}
          alt="Nakhlex Exchange"
          src="/images/illustration-top.png"
          objectFit="fill"
        />
      </Grid>
    </Grid.Container>
  );
};
