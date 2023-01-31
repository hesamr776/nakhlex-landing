import { Image, Grid, Text } from '@nextui-org/react';
import { useTranslation } from 'next-i18next';

export const TradeFlow = () => {
  const { t } = useTranslation();

  return (
    <section id="TradeFlow">
      <Grid.Container>
        <Grid xs={12} justify="center">
          <Text
            size={32}
            weight="bold"
            css={{
              ta: 'center',
              mt: '$17',
              mb: '$12',
              '@xsMax': { fs: 20, w: 300, mt: '$10' },
            }}
          >
            {t('TradeFlowHint')}
          </Text>
        </Grid>

        <Grid xs={12} sm={0} justify="center">
          <Image
            src={'images/trade-flow-mobile.png'}
            objectFit="cover"
            alt="nakhlex benefits"
            css={{ mw: 1136 }}
          />
        </Grid>

        <Grid xs={0} sm={12} justify="center">
          <Image
            src={'images/trade-flow.png'}
            objectFit="cover"
            alt="nakhlex TradeFlow"
            css={{ mw: 1136 }}
          />
        </Grid>
      </Grid.Container>
    </section>
  );
};
