import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import { Grid, Button, Text, Image, Row } from '@nextui-org/react';

const contents = ['legal', 'privacy', 'mobilePrivacy', 'otherPrivacy'];

const LegalAndPrivacy = () => {
  const { t } = useTranslation('common');

  return (
    <Grid css={{ pb: '$28' }}>
      <Button
        size="lg"
        css={{
          position: 'fixed',
          bottom: '$28',
          right: '$16',
          '@xsMax': { bottom: '$40', right: '$8' },
          '@md': { right: '$40' },
          width: 288,
          background: 'rgba(223, 218, 253, 0.95)',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
          borderRadius: 8,
        }}
      >
        <Row align="center" justify="space-between" css={{ w: 256 }}>
          <Text color="#0B1217" weight="bold">
            {t('downloadLegal')}
          </Text>

          <Image
            src="/download-icon.svg"
            alt="download nakhlex legal and privacy pdf"
          />
        </Row>
      </Button>

      {contents.map(content => (
        <>
          <Text h1 size={32} css={{ pt: '$18', pb: '$8' }}>
            {t(content)}
          </Text>

          <Text size={16}>{t(`${content}Hint`)}</Text>
        </>
      ))}
    </Grid>
  );
};

export const getStaticProps = async ({ locale }: { locale: 'en' | 'ar' }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default LegalAndPrivacy;
