import { Card, Grid, Text } from '@nextui-org/react';
import { useTranslation } from 'next-i18next';
import { DashLine } from './DashLine';

type BenefitType = {
  id: number;
  header: string;
  title: string;
};

export const Benefits = () => {
  const { t } = useTranslation();

  const benefits: BenefitType[] = [
    {
      id: 1,
      header: t('benefit-1'),
      title: t('benefitHint-1'),
    },
    {
      id: 2,
      header: t('benefit-2'),
      title: t('benefitHint-2'),
    },
    {
      id: 3,
      header: t('benefit-3'),
      title: t('benefitHint-3'),
    },
  ];

  return (
    <Grid.Container
      id="Benefits"
      css={{
        mw: 1136,
        bg: '$secondaryLight',
        p: '$12',
        mt: '$18',
        mx: 'auto',
        borderRadius: 24,
      }}>
      <Grid xs={12} alignItems="center">
        <Text size={24} weight="bold">
          {t('benefitsHint')}
        </Text>
        <DashLine />
      </Grid>

      <Grid
        xs={12}
        justify="space-between"
        css={{
          overflowX: 'auto',
        }}>
        {benefits.map(BenefitItem)}
      </Grid>
    </Grid.Container>
  );
};

const BenefitItem = (benefit: BenefitType, index: number) => (
  <Card
    key={`benefit-${benefit.id}`}
    css={{
      filter: 'none',
      minWidth: 300,
      maxWidth: 300,
      h: 270,
      bg: 'transparent',
      mt: '$12',
      mx: '$2',
    }}>
    <Card.Body
      css={{
        p: '$12',
        bg: '$white',
        alignItems: 'flex-start',
        borderRadius: 22,
      }}>
      <Text
        size={20}
        weight="bold"
        color="$primary"
        css={{ lineHeight: '20px' }}>
        0{index + 1}
      </Text>

      <Text size={20} weight="bold" css={{ mt: '$8', mb: '$4' }}>
        {benefit.header}
      </Text>

      <Text css={{ ta: 'start' }} size={14}>
        {benefit.title}
      </Text>
    </Card.Body>
  </Card>
);
