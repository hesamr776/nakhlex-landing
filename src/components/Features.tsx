import { Card, Col, Grid, Row, Text } from '@nextui-org/react';
import { useTranslation } from 'next-i18next';

type FeatureType = {
  id: number;
  image: string;
  header: string;
  title: string;
};

export const Features = () => {
  const { t } = useTranslation();
  const features: FeatureType[] = [
    {
      id: 1,
      image: '/feature-1.png',
      header: t('feature-1'),
      title: t('featureHint-1'),
    },
    {
      id: 2,
      image: '/feature-2.png',
      header: t('feature-2'),
      title: t('featureHint-2'),
    },
    {
      id: 3,
      image: '/feature-3.png',
      header: t('feature-3'),
      title: t('featureHint-3'),
    },
  ];
  return (
    <Grid.Container css={{ mb: '$20' }}>
      <Grid xs={12} justify="center">
        <Text
          size={32}
          weight="bold"
          css={{ my: '$20', '@xsMax': { fs: 20, w: 300, my: '$10' } }}
        >
          {t('featuresHint')}
        </Text>
      </Grid>

      {features.map(feature => (
        <Grid
          key={`feature-${feature.id}`}
          xs={12}
          sm={4}
          direction="row"
          alignItems="center"
          justify="center"
        >
          <Card css={{ w: 300, bg: 'transparent' }}>
            <Card.Body css={{ p: '$0' }}>
              <Card.Image
                src={feature.image}
                width={300}
                height={300}
                objectFit="cover"
                alt="nakhlex feature"
              />
            </Card.Body>

            <Card.Footer>
              <Col>
                <Text size={18} weight="bold" css={{ mt: '$8', mb: '$4' }}>
                  {feature.header}
                </Text>

                <Text css={{ mb: '$8' }}>{feature.title}</Text>
              </Col>
            </Card.Footer>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
  );
};
