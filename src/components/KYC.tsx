import { Grid, Text, Image } from '@nextui-org/react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useWindowSize } from '../hooks/dimensions';

export const KYC = () => {
  const { t } = useTranslation('common');
  const { width = 0 } = useWindowSize();
  const youtubeWidth =
    width > 1200 ? 1175 : width > 960 ? width - 110 : width - 45;

  return (
    <section id="kyc">
      <Text
        size={32}
        weight="bold"
        css={{ pt: '$10', mb: '$8', '@xsMax': { fs: 24 } }}
      >
        {t('kycFlow')}
      </Text>

      <Text>{t('kycFlowHint')}</Text>

      <KYCFlow width={width} />

      <Text css={{ mt: '$32', w: youtubeWidth, mx: 'auto', mb: '$8' }}>
        {t('youtubeHint')}
      </Text>

      <Youtube width={youtubeWidth} />
    </section>
  );
};

const KYCFlow = ({ width }: { width: number }) => {
  const { locale } = useRouter();

  return width > 720 ? (
    <Image
      css={{ mw: 1200, mx: 'auto' }}
      alt="Nakhlex Exchange"
      src={`/images/kycFlow${locale === 'en' ? '' : '-ar'}.png`}
      objectFit="fill"
    />
  ) : (
    <Image
      css={{ mw: 400, mx: 'auto', mt: '$10' }}
      alt="Nakhlex Exchange"
      src={`/images/kycFlow-mobile${locale === 'en' ? '' : '-ar'}.png`}
      objectFit="fill"
    />
  );
};

const Youtube = ({ width }: { width: number }) => {
  return (
    <Grid.Container
      gap={1}
      justify="center"
      alignItems="center"
      color="$primary"
    >
      <Grid xs={12} justify="center">
        <iframe
          style={{ borderRadius: 20, overflow: 'hidden' }}
          width={width}
          height={(width * 9) / 16}
          src="https://www.youtube.com/embed/a8e30G6ZNjg"
          title="Nakhlex KYC YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Grid>
    </Grid.Container>
  );
};
