import { Grid, Text, Image } from '@nextui-org/react';
import { useTranslation } from 'next-i18next';

import { usePlayerWidth } from '../hooks/dimensions';

export const VideoPlayer = () => {
  const playerWidth = usePlayerWidth();
  const youtubeWidth = playerWidth > 915 ? playerWidth / 1.5 : playerWidth;

  const { t } = useTranslation('common');

  return (
    <Grid.Container
      gap={1}
      justify="center"
      alignItems="center"
      color="$primary">
      <Grid xs={12} justify="center">
        <Text size={24} weight="medium" css={{ mt: '$17', mb: '$8' }}>
          {t('youtubeHint')}
        </Text>
      </Grid>

      <Grid xs={12} justify="center">
        <Grid xs={12} sm={0} style={{ position: 'absolute', zIndex: -1 }}>
          <Image
            css={{ mx: 'auto', pt: '$16' }}
            alt="Nakhlex Exchange"
            src={`/images/video-player-mobile.png`}
            objectFit="fill"
          />
        </Grid>

        <Grid xs={0} sm={12} style={{ position: 'absolute', zIndex: -1 }}>
          <Image
            css={{ mw: 1200, mx: 'auto', pt: '$16' }}
            alt="Nakhlex Exchange"
            src={`/images/video-player.png`}
            objectFit="fill"
          />
        </Grid>

        <iframe
          style={{ borderRadius: 20, overflow: 'hidden' }}
          width={youtubeWidth}
          height={(youtubeWidth * 9) / 16}
          src="https://www.youtube.com/embed/a8e30G6ZNjg"
          title="Nakhlex KYC YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></iframe>
      </Grid>

      <Grid xs={12} justify="center">
        <Text
          css={{ w: youtubeWidth, ta: 'center', mt: '$18' }}
          weight="bold"
          size={21}>
          {t('youtubeHint2')}
        </Text>
      </Grid>

      <Grid xs={12} justify="center">
        <Text
          css={{ w: youtubeWidth, ta: 'center', mb: '$12' }}
          color="$secondary"
          size={21}>
          {t('youtubeHint3')}
        </Text>
      </Grid>
    </Grid.Container>
  );
};
