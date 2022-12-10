import { Grid, Text, Image } from '@nextui-org/react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

import { useWindowSize } from '../hooks/dimensions';

export const KYC = () => {
  const { width = 0 } = useWindowSize();
  const youtubeWidth =
    width > 1200 ? 1175 : width > 960 ? width - 110 : width - 45;

  return (
    <section id="campaign">
      <Campaign width={width} />

      <Youtube width={youtubeWidth} />
    </section>
  );
};

const Campaign = ({ width }: { width: number }) => {
  const { locale } = useRouter();

  return width > 720 ? (
    <Image
      css={{ mw: 1200, mx: 'auto', pt: '$16' }}
      alt="Nakhlex Exchange"
      src={`/images/campaign${locale === 'en' ? '' : '-ar'}.jpg`}
      objectFit="fill"
    />
  ) : (
    <Image
      css={{ mw: '100vw', mx: 'auto', mt: '$10', ml: '$2' }}
      alt="Nakhlex Exchange"
      src={`/images/campaign${locale === 'en' ? '' : '-ar'}.jpg`}
      objectFit="fill"
    />
  );
};

const Youtube = ({ width }: { width: number }) => {
  const { t } = useTranslation('common');

  return (
    <>
      <Text css={{ mt: '$32', w: width, mx: 'auto', mb: '$8' }}>
        {t('youtubeHint')}
      </Text>

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
    </>
  );
};
