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
    <Grid.Container justify="space-around" css={{ mb: '$20', pr: '$12' }}>
      <Text size={32} weight="bold" css={{ ta: 'center', my: '$20' }}>
        {t('featuresHint')}
      </Text>
      {features.map(feature => (
        <Grid
          key={`feature-${feature.id}`}
          xs={12}
          sm={4}
          alignItems="center"
          justify="center"
        >
          <Card css={{ w: 310, bg: 'transparent' }}>
            <Card.Body>
              <Card.Image
                src={feature.image}
                width={300}
                height={300}
                objectFit="cover"
                alt="nakhlex feature "
              />
            </Card.Body>

            <Card.Footer>
              <Col>
                <Text size={18} weight="bold">
                  {feature.header}
                </Text>

                <Text css={{ my: '$6' }}>{feature.title}</Text>
              </Col>
            </Card.Footer>
          </Card>
        </Grid>
      ))}
      ;
    </Grid.Container>
  );
};
