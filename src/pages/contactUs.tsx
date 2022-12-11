import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import { Grid, Text, Link, Row } from '@nextui-org/react';

const ContactUs = () => {
  const { t } = useTranslation('common');

  return (
    <Grid css={{ pt: '$20' }}>
      <Text h1 size={32} css={{ pb: '$8' }}>
        {t('contactUs')}
      </Text>

      <Text size={16}>{t('contactUsHint1')}</Text>

      <Row align="center">
        <Text size={16} css={{ mx: '$3' }}>
          {t('contactUsHint2')}
        </Text>
        <Link
          href={t('contactUsHintLink2')}
          target="_blank"
          style={{ textDecoration: 'underline' }}>
          <Text size={16}>{t('contactUsHintNumber2')}</Text>
        </Link>
      </Row>

      <Row align="center">
        <Text size={16} css={{ mx: '$3' }}>
          {t('contactUsHint3')}
        </Text>
        <Link
          href={t('contactUsHintLink3')}
          target="_blank"
          style={{ textDecoration: 'underline' }}>
          <Text size={16}>{t('contactUsHintNumber3')}</Text>
        </Link>
      </Row>
    </Grid>
  );
};

export const getStaticProps = async ({ locale }: { locale: 'en' | 'ar' }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default ContactUs;
