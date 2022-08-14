import { Button, Col, Grid, Text } from '@nextui-org/react';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';

export const Features = () => {
  const { t } = useTranslation();

  const tabs = [
    { id: 'P2P', label: 'P2P' },
    { id: 'OTC', label: 'OTC' },
    { id: 'Express', label: 'Express' },
  ];
  const [tab, setTab] = useState(tabs[0].id);

  return (
    <section id="Features">
      <Text
        size={32}
        weight="bold"
        css={{ pt: '$20', mb: '$8', '@xsMax': { fs: 24 } }}
      >
        {t('featuresFull')}
      </Text>

      <Text>{t('featuresHint')}</Text>

      <Tabs tabs={tabs} activeTab={tab} setTab={setTab} />

      <Grid.Container justify="center">
        <Grid
          xs={12}
          sm={10}
          css={{ minHeight: 410, '@smMax': { minHeight: 600 } }}
        >
          {tab === 'P2P' && <P2P />}
        </Grid>
      </Grid.Container>
    </section>
  );
};

type TabType = { id: string; label: string };

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
        borderBottomColor: activeTab === tab.id ? '#6554C0' : '#BBBBBB',
      }}
    >
      <Button onPress={() => setTab(tab.id)} css={{ w: '100%' }}>
        <Text
          size={18}
          weight="bold"
          css={{ '@xsMax': { fs: 14 } }}
          color={activeTab === tab.id ? '#6554C0' : '#BBBBBB'}
        >
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
      }}
    >
      {tabs.map(TabItem)}
    </Button.Group>
  );
};

const P2P = () => (
  <Grid.Container>
    <Grid xs={12}>
      <Text css={{ mb: '$12' }}>
        Buy and sell USDT(Tether) safely and easily on Nakhlex P2P Trade
        platform. Find the best offer and buy and sell USDT with Your Preferred
        Payment Methods.
      </Text>
    </Grid>

    <Grid xs={12} sm={4} direction="column">
      <Text size={18} weight="bold">
        Advantages of P2P Trade
      </Text>

      <ul style={{ paddingBottom: 16 }}>
        <li style={{ paddingTop: 16 }}>Low cost transaction fees</li>
        <li style={{ paddingTop: 16 }}>Flexible payment methods</li>
        <li style={{ paddingTop: 16 }}>Trade at your preferred prices</li>
        <li style={{ paddingTop: 16 }}>Protection for your privacy</li>
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
          xs={12}
        >
          <Text size={18} weight="bold">
            How P2P Works
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
          xs={6}
        >
          <Text size={16} weight="bold">
            Buy Crypto
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
          xs={6}
        >
          <Text size={16} weight="bold">
            Sell Crypto
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
          direction="column"
        >
          <Text size={14} weight="bold">
            Plan an order
          </Text>
          <Text size={14} css={{ mt: '$3', mb: '$5' }}>
            Once you place a P2P order, the crypto asset will be escrowed by
            Nakhlex P2P.
          </Text>

          <Text size={14} weight="bold">
            Pay the Seller
          </Text>
          <Text size={14} css={{ mt: '$3', mb: '$5' }}>
            Send money to the seller via the suggested payment methods. Complete
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            the fiat transaction and click "I've paid" on Nakhlex P2P.
          </Text>

          <Text size={14} weight="bold">
            Get your Crypto
          </Text>
          <Text size={14} css={{ mt: '$3', mb: '$5' }}>
            Once the seller confirms receipt of money, the escrowed crypto will
            be released to you.
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
          direction="column"
        >
          <Text size={14} weight="bold">
            Plan an order
          </Text>
          <Text size={14} css={{ mt: '$3', mb: '$5' }}>
            After you place an order, your crypto will be escrowed by Nakhlex
            P2P.
          </Text>

          <Text size={14} weight="bold">
            Confirm the Payment
          </Text>
          <Text size={14} css={{ mt: '$3', mb: '$5' }}>
            Check the transaction record in the given payment account, and make
            sure you receive the money sent by the buyer.
          </Text>

          <Text size={14} weight="bold">
            Release Crypto
          </Text>
          <Text size={14} css={{ mt: '$3', mb: '$5' }}>
            Once you confirm the receipt of money, release crypto to the buyer
            on Nakhlex P2P.
          </Text>
        </Grid>
      </Grid.Container>
    </Grid>
  </Grid.Container>
);
