import { Grid, Text } from '@nextui-org/react';
import { useTranslation } from 'next-i18next';

import { useWindowSize } from '../hooks/dimensions';

export const KYC = () => {
  const { t } = useTranslation('common');
  const { width = 0 } = useWindowSize();
  const youtubeWidth =
    width > 1200 ? 1175 : width > 960 ? width - 110 : width - 45;

  return (
    <section id="kyc">
      <Text css={{ mt: '$32', w: youtubeWidth, mx: 'auto', mb: '$8' }}>
        {t('youtubeHint')}
      </Text>

      <Youtube width={youtubeWidth} />
    </section>
  );
};

const Youtube = ({ width }: { width: number }) => {
  return (
    <Grid.Container
      gap={1}
      justify="center"
      alignItems="center"
      color="$primary">
      <Grid xs={12} justify="center">
        <iframe
          style={{ borderRadius: 20, overflow: 'hidden' }}
          width={width}
          height={(width * 9) / 16}
          src="https://www.youtube.com/embed/a8e30G6ZNjg"
          title="Nakhlex KYC YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></iframe>
      </Grid>
    </Grid.Container>
  );
};
