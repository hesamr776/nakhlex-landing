import { Button, Col, Grid, Row, Text } from '@nextui-org/react';
import { useTranslation } from 'next-i18next';
import { Fragment, useState } from 'react';
import { GAEvent } from '../hooks/useFirebase';
import { DashLine } from './DashLine';

export const Features = () => {
  const { t } = useTranslation();

  const tabs = [
    { id: 'P2P', label: t('P2P.name'), isDisable: false },
    { id: 'OTC', label: t('OTC.name'), isDisable: false },
    { id: 'Express', label: t('Express.name'), isDisable: false },
  ];
  const [tab, setTab] = useState(tabs[0].id);

  return (
    <Grid.Container
      id="Features"
      css={{
        mw: 1136,
        mx: 'auto',
        '@xsMax': { mw: 375 },
        '@smMax': { mw: 600 },
      }}>
      <Text
        size={32}
        weight="bold"
        css={{ pt: '$20', m: '$0', '@xsMax': { fs: 24 } }}>
        {t('featuresFull')}
      </Text>

      <Text>{t('featuresHint')}</Text>

      <Tabs tabs={tabs} activeTab={tab} setTab={setTab} />

      <Grid css={{ minHeight: 410, '@smMax': { minHeight: 600 } }}>
        {tab === 'P2P' && <FeatureDetails featureName="P2P" />}
        {tab === 'OTC' && <FeatureDetails featureName="OTC" />}
        {tab === 'Express' && <FeatureDetails featureName="Express" />}
      </Grid>
    </Grid.Container>
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
    <Row
      align="flex-end"
      css={{
        m: '40px 0',
      }}>
      <Button.Group
        color="secondary"
        light
        css={{
          w: '100%',
          mw: 480,

          justifyContent: 'space-between',
        }}>
        {tabs.map(TabItem)}
      </Button.Group>
      <DashLine noMargin />
    </Row>
  );
};

const FeatureDetails = ({ featureName }: { featureName: string }) => {
  const { t } = useTranslation();

  return (
    <Grid.Container>
      <Grid xs={12} sm={6} direction="column">
        <Text css={{ mb: '$12', pl: '$4' }}>
          {t(`${featureName}.description`)}
        </Text>

        <Text size={18} weight="semibold" color="primary">
          {t(`${featureName}.advantages`)}
        </Text>

        <Row wrap="wrap">
          {[1, 2, 3, 4, 5].map(index =>
            t(`${featureName}.advantage0${index}`) ? (
              <Col
                key={`feature-${featureName}_${index}`}
                css={{
                  bg: '$secondaryLight',
                  borderRadius: 20,
                  minWidth: 160,
                  maxWidth: 220,

                  pt: '$5',
                  pb: '$8',
                  px: '$8',
                  mx: '$5',
                  m: '$5',
                  '@smMax': { width: 160, mx: '$2' },
                }}>
                <Text size={14} color="secondary" css={{ m: '$0' }}>
                  0{index}
                </Text>
                <Text size={14} css={{ m: '$0' }}>
                  {t(`${featureName}.advantage0${index}`)}
                </Text>
              </Col>
            ) : (
              <Fragment key={`feature-${featureName}_${index}`}></Fragment>
            ),
          )}
        </Row>
      </Grid>

      <Grid xs={12} sm={6}>
        <Grid.Container css={{ bg: '$secondaryLightHover', borderRadius: 24 }}>
          <Grid
            css={{
              ta: 'center',
              py: '$16',
            }}
            justify="center"
            alignItems="center"
            xs={12}>
            <Text size={22} weight="bold">
              {t('howWorks', { feature: t(`${featureName}.name`) })}
            </Text>
          </Grid>

          {featureName === 'P2P' ? (
            <HowP2PWorks />
          ) : (
            <Grid
              css={{
                bg: 'white',
                ta: 'center',
                height: 279,
                borderRadius: 20,
                mb: '$10',
                mx: '$10',
                p: '$8',
              }}
              alignItems="center"
              justify="center"
              xs={12}>
              <Text size={14} weight="bold" css={{ mt: '$16' }}>
                {t(`${featureName}.how`)}
              </Text>
            </Grid>
          )}
        </Grid.Container>
      </Grid>
    </Grid.Container>
  );
};

const HowP2PWorks = () => {
  const { t } = useTranslation();
  return (
    <>
      <Grid justify="center" xs={12} sm={6} css={{ px: '$4' }}>
        <Col
          css={{
            minHeight: 279,
            '@smMax': { minHeight: 229 },
            bg: 'white',
            borderRadius: 20,
            mb: '$10',
            mr: '$4',
            px: '$8',
          }}>
          <Text
            size={20}
            color="primary"
            weight="bold"
            css={{ mt: '$8', mx: '$0' }}>
            {t(`P2P.buy`)}
          </Text>

          <Text size={14} weight="medium" css={{ mt: '$8', m: '$0' }}>
            {t(`P2P.buyItem01.title`)}
          </Text>

          <Text size={14} css={{ m: '$0' }}>
            {t(`P2P.buyItem01.subtitle`)}
          </Text>

          <Text size={14} weight="medium" css={{ mt: '$8', mx: '$0' }}>
            {t(`P2P.buyItem02.title`)}
          </Text>

          <Text size={14} weight="medium" css={{ mt: '$8', mx: '$0' }}>
            {t(`P2P.buyItem03.title`)}
          </Text>
        </Col>
      </Grid>

      <Grid justify="center" xs={12} sm={6} css={{ px: '$4' }}>
        <Col
          css={{
            minHeight: 279,
            '@smMax': { minHeight: 229 },

            bg: 'white',
            borderRadius: 20,
            mb: '$10',
            ml: '$4',
            px: '$8',
          }}>
          <Text
            size={20}
            color="primary"
            weight="bold"
            css={{ mt: '$8', mx: '$0' }}>
            {t(`P2P.sell`)}
          </Text>

          <Text size={14} weight="medium" css={{ mt: '$8', mx: '$0' }}>
            {t(`P2P.sellItem01.title`)}
          </Text>

          <Text size={14} weight="medium" css={{ mt: '$8', mx: '$0' }}>
            {t(`P2P.sellItem02.title`)}
          </Text>

          <Text size={14} weight="medium" css={{ mt: '$8', mx: '$0' }}>
            {t(`P2P.sellItem03.title`)}
          </Text>
        </Col>
      </Grid>
    </>
  );
};
