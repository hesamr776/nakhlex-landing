import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import { Text } from '@nextui-org/react';

const FAQ = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <Text h1 size={32} css={{ pb: '$8' }}>
        {t('FAQFull')}
      </Text>

      <Text size={16}>{t('FAQHint')}</Text>
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: 'en' | 'ar' }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default FAQ;
