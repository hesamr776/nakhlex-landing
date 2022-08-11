import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import { Row, Text } from '@nextui-org/react';

const contents = ['legal', 'privacy', 'mobilePrivacy', 'otherPrivacy'];

const LegalAndPrivacy = () => {
  const { t } = useTranslation('common');

  return contents.map(content => (
    <>
      <Text h1 size={32} css={{ pt: '$18', pb: '$8' }}>
        {t(content)}
      </Text>
      <Row css={{ pr: '$16' }}>
        <Text size={16}>{t(`${content}Hint`)}</Text>
      </Row>
    </>
  ));
};

export const getStaticProps = async ({ locale }: { locale: 'en' | 'ar' }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default LegalAndPrivacy;
