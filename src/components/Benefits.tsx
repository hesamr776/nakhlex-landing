import { Card, Col, Grid, Text } from '@nextui-org/react';
import { useTranslation } from 'next-i18next';

type BenefitType = {
  id: number;
  image: string;
  header: string;
  title: string;
};

export const Benefits = () => {
  const { t } = useTranslation();

  const benefits: BenefitType[] = [
    {
      id: 1,
      image: '/benefit-1.png',
      header: t('benefit-1'),
      title: t('benefitHint-1'),
    },
    {
      id: 2,
      image: '/benefit-2.png',
      header: t('benefit-2'),
      title: t('benefitHint-2'),
    },
    {
      id: 3,
      image: '/benefit-3.png',
      header: t('benefit-3'),
      title: t('benefitHint-3'),
    },
  ];

  return (
    <Grid.Container>
      <Grid xs={12} justify="center">
        <Text
          size={32}
          weight="bold"
          css={{ my: '$20', '@xsMax': { fs: 20, w: 300, my: '$10' } }}>
          {t('benefitsHint')}
        </Text>
      </Grid>

      {benefits.map(BenefitItem)}
    </Grid.Container>
  );
};

const BenefitItem = (benefit: BenefitType) => (
  <Grid
    key={`benefit-${benefit.id}`}
    xs={12}
    sm={4}
    direction="row"
    alignItems="center"
    justify="center">
    <Card css={{ w: 300, bg: 'transparent' }}>
      <Card.Body css={{ p: '$0' }}>
        <Card.Image
          src={benefit.image}
          width={300}
          height={300}
          objectFit="cover"
          alt="nakhlex benefits"
        />
      </Card.Body>

      <Card.Footer>
        <Col>
          <Text size={18} weight="bold" css={{ mt: '$8', mb: '$4' }}>
            {benefit.header}
          </Text>

          <Text css={{ mb: '$8' }}>{benefit.title}</Text>
        </Col>
      </Card.Footer>
    </Card>
  </Grid>
);
