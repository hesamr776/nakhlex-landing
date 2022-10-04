import { Button, Col, Grid, Text } from '@nextui-org/react';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { GAEvent } from '../hooks/useFirebase';

export const Features = () => {
  const { t } = useTranslation();

  const tabs = [
    { id: 'P2P', label: t('P2P.name'), isDisable: false },
    { id: 'OTC', label: t('OTC.name'), isDisable: false },
    { id: 'Express', label: t('Express.name'), isDisable: false },
  ];
  const [tab, setTab] = useState(tabs[0].id);

  return (
    <section id="Features">
      <Text
        size={32}
        weight="bold"
        css={{ pt: '$20', mb: '$8', '@xsMax': { fs: 24 } }}>
        {t('featuresFull')}
      </Text>

      <Text>{t('featuresHint')}</Text>

      <Tabs tabs={tabs} activeTab={tab} setTab={setTab} />

      <Grid.Container justify="center">
        <Grid
          xs={12}
          sm={10}
          css={{ minHeight: 410, '@smMax': { minHeight: 600 } }}>
          {tab === 'P2P' && <FeatureDetails featureName="P2P" />}
          {tab === 'OTC' && <FeatureDetails featureName="OTC" />}
          {tab === 'Express' && <FeatureDetails featureName="Express" />}
        </Grid>
      </Grid.Container>
    </section>
  );
};

type TabType = { id: string; label: string; isDisable: boolean };

const Tabs = ({
  tabs,
  activeTab,
  setTab,
}: {
  tabs: TabType[];
  activeTab: string;
  setTab: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const TabItem = (tab: TabType) => (
    <Col
      key={`feature-tab_${tab.id}`}
      span={4}
      css={{
        d: 'flex',
        justifyContent: 'center',
        borderBottom: '2px solid',
        borderBottomColor: activeTab === tab.id ? '$primary' : '#BBBBBB',
      }}>
      <Button
        disabled={tab.isDisable}
        onPress={() => {
          setTab(tab.id);

          GAEvent('features', { tab: tab.id });
        }}
        css={{ w: '100%' }}>
        <Text
          size={18}
          weight="bold"
          css={{ '@xsMax': { fs: 14 } }}
          color={activeTab === tab.id ? '$primary' : '#BBBBBB'}>
          {tab.label}
        </Text>
      </Button>
    </Col>
  );

  return (
    <Button.Group
      color="secondary"
      light
      css={{
        w: '100%',
        m: '40px 0',
        justifyContent: 'space-between',
      }}>
      {tabs.map(TabItem)}
    </Button.Group>
  );
};

const FeatureDetails = ({ featureName }: { featureName: string }) => {
  const { t } = useTranslation();

  return (
    <Grid.Container>
      <Grid xs={12}>
        <Text css={{ mb: '$12' }}>{t(`${featureName}.description`)}</Text>
      </Grid>

      <Grid xs={12} sm={4} direction="column">
        <Text size={18} weight="bold">
          {t(`${featureName}.advantages`)}
        </Text>

        <ul style={{ paddingBottom: 16 }}>
          <li style={{ paddingTop: 16 }}>{t(`${featureName}.advantage01`)}</li>
          <li style={{ paddingTop: 16 }}>{t(`${featureName}.advantage02`)}</li>
          <li style={{ paddingTop: 16 }}>{t(`${featureName}.advantage03`)}</li>
          <li style={{ paddingTop: 16 }}>{t(`${featureName}.advantage04`)}</li>
          <li style={{ paddingTop: 16 }}>{t(`${featureName}.advantage05`)}</li>
        </ul>
      </Grid>

      <Grid xs={12} sm={8}>
        <Grid.Container>
          <Grid
            css={{
              bg: '#F8F8F8',
              ta: 'center',
              py: '$5',
              borderRadius: '12px 12px 0 0',
              border: '1px solid #fff',
            }}
            justify="center"
            alignItems="center"
            xs={12}>
            <Text size={18} weight="bold">
              {t('howWorks', { feature: t(`${featureName}.name`) })}
            </Text>
          </Grid>

          {featureName === 'P2P' ? (
            <>
              <Grid
                css={{
                  bg: '#F8F8F8',
                  ta: 'center',
                  py: '$5',
                  border: '1px solid #fff',
                }}
                justify="center"
                xs={6}>
                <Text size={16} weight="bold">
                  {t(`${featureName}.buy`)}
                </Text>
              </Grid>

              <Grid
                css={{
                  bg: '#F8F8F8',
                  ta: 'center',
                  py: '$5',
                  border: '1px solid #fff',
                }}
                justify="center"
                xs={6}>
                <Text size={16} weight="bold">
                  {t(`${featureName}.sell`)}
                </Text>
              </Grid>

              <Grid
                css={{
                  bg: '#F8F8F8',
                  p: '$8',
                  borderRadius: '0 0 0 12px',
                  border: '1px solid #fff',
                }}
                xs={6}
                direction="column">
                <Text size={14} weight="bold">
                  {t(`${featureName}.buyItem01.title`)}
                </Text>
                <Text size={14} css={{ mt: '$3', mb: '$5' }}>
                  {t(`${featureName}.buyItem01.subtitle`)}
                </Text>

                <Text size={14} weight="bold">
                  {t(`${featureName}.buyItem02.title`)}
                </Text>
                <Text size={14} css={{ mt: '$3', mb: '$5' }}>
                  {t(`${featureName}.buyItem02.subtitle`)}
                </Text>

                <Text size={14} weight="bold">
                  {t(`${featureName}.buyItem03.title`)}
                </Text>
                <Text size={14} css={{ mt: '$3', mb: '$5' }}>
                  {t(`${featureName}.buyItem03.subtitle`)}
                </Text>
              </Grid>

              <Grid
                css={{
                  bg: '#F8F8F8',
                  p: '$8',
                  borderRadius: '0 0 12px 0',
                  border: '1px solid #fff',
                }}
                xs={6}
                direction="column">
                <Text size={14} weight="bold">
                  {t(`${featureName}.sellItem01.title`)}
                </Text>
                <Text size={14} css={{ mt: '$3', mb: '$5' }}>
                  {t(`${featureName}.sellItem01.subtitle`)}
                </Text>
                <Text size={14} weight="bold">
                  {t(`${featureName}.sellItem02.title`)}
                </Text>
                <Text size={14} css={{ mt: '$3', mb: '$5' }}>
                  {t(`${featureName}.sellItem02.subtitle`)}
                </Text>
                <Text size={14} weight="bold">
                  {t(`${featureName}.sellItem03.title`)}
                </Text>
                <Text size={14} css={{ mt: '$3', mb: '$5' }}>
                  {t(`${featureName}.sellItem03.subtitle`)}
                </Text>
              </Grid>
            </>
          ) : (
            <Grid
              css={{
                bg: '#F8F8F8',
                px: '$4',
                py: '$5',
                border: '1px solid #fff',
              }}
              justify="center"
              xs={12}>
              <Text size={14} weight="bold">
                {t(`${featureName}.how`)}
              </Text>
            </Grid>
          )}
        </Grid.Container>
      </Grid>
    </Grid.Container>
  );
};
