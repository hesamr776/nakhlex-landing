import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import { Grid, Text } from '@nextui-org/react';

const contents = [
  'terms',
  '1-acceptance',
  '2-eligibility',
  '3-description',
  '4-further',
  '5-registration',
  '6-trading',
  '7-P2P',
  '8-advertisements',
  '9-limitation',
  '10-fees',
  '11-termination',
  '12-intellectual',
  '13-disclaimer',
  '14-general',
];

const AppLegalAndPrivacy = () => {
  const { t } = useTranslation();

  return (
    <Grid css={{ pb: '$28' }}>
      {contents.map(content => (
        <div key={content}>
          <Text h1 size={32} css={{ pt: '$18', pb: '$8' }}>
            {t(content)}
          </Text>

          <Text size={16}>{t(`${content}Hint`)}</Text>
        </div>
      ))}
    </Grid>
  );
};

export const getStaticProps = async ({ locale }: { locale: 'en' | 'ar' }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default AppLegalAndPrivacy;
