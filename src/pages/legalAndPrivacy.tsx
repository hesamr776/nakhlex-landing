import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import { Grid, Button, Text, Image, Row } from '@nextui-org/react';
import { useRouter } from 'next/router';

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

const LegalAndPrivacy = () => {
  const { t } = useTranslation();
  const { locale } = useRouter();

  return (
    <Grid css={{ pb: '$28' }}>
      <Button
        as="a"
        href={`/TermsOfUse-${locale}-v1.0.0.pdf`}
        target="_blank"
        name="pdf"
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

export default LegalAndPrivacy;
