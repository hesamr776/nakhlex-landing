import { Grid, Text, Image } from '@nextui-org/react';
import { useTranslation } from 'next-i18next';
// import YouTube from 'react-youtube';
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
        css={{ pt: '$10', mb: '$8', '@xsMax': { fs: 24 } }}>
        {t('kycFlow')}
      </Text>

      <Text>{t('kycFlowHint')}</Text>

      {width > 720 ? (
        <Image
          css={{ mw: 1200, mx: 'auto' }}
          alt="Nakhlex Exchange"
          src="/kycFlow.png"
          objectFit="fill"
        />
      ) : (
        <Image
          css={{ mw: 400, mx: 'auto', mt: '$10' }}
          alt="Nakhlex Exchange"
          src="/kycFlow-mobile.png"
          objectFit="fill"
        />
      )}

      <Grid.Container
        gap={1}
        justify="center"
        alignItems="center"
        color="$primary">
        <Grid xs={12} justify="center">
          {/* <YouTube
            videoId="sTnm5jvjgjM"
            opts={{ width: youtubeWidth, height: (youtubeWidth * 9) / 16 }}
            style={{ borderRadius: 20, overflow: 'hidden' }}
            onReady={event => {
              event.target.pauseVideo();
            }}
          /> */}
          <iframe
            style={{ borderRadius: 20, overflow: 'hidden' }}
            width={youtubeWidth}
            height={(youtubeWidth * 9) / 16}
            src="https://www.youtube.com/embed/Oo-lfZQDH4o"
            title="Nakhlex KYC YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </Grid>
      </Grid.Container>

      <Text css={{ mt: 16, w: youtubeWidth, mx: 'auto', mb: '$10' }}>
        {t('youtubeHint')}
      </Text>
    </section>
  );
};
