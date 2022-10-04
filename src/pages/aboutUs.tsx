import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import { Image, Grid, Text } from '@nextui-org/react';

const AboutUs = () => {
  const { t } = useTranslation('common');

  return (
    <Grid.Container
      gap={1}
      justify="center"
      alignItems="flex-start"
      color="$primary"
    >
      <Grid xs={12} sm={7} direction="column">
        <Text h1 size={32} css={{ pt: '$18', pb: '$8' }}>
          {t('aboutUs')}
        </Text>
        <Text size={16}>{t('aboutUsHint')}</Text>

        <Grid xs={12} sm={0}>
          <Image
            css={{ mw: 320, pt: '$10' }}
            alt="Nakhlex Exchange"
            src="/images/illustration-aboutUs.png"
            objectFit="fill"
          />
        </Grid>

        <Text h1 size={32} css={{ pt: '$18', pb: '$8' }}>
          {t('ourHistory')}
        </Text>
        <Text size={16}>{t('ourHistoryHint')}</Text>
      </Grid>

      <Grid xs={0} sm={5} css={{ pt: '$16' }}>
        <Image
          css={{ mw: 420, pt: '$10' }}
          alt="Nakhlex Exchange"
          src="/images/illustration-aboutUs.png"
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

export default AboutUs;
