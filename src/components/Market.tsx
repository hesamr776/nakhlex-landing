import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { Image, Row, Table, Text, Button, Grid } from '@nextui-org/react';
import { useTranslation } from 'next-i18next';
import { TFunction } from 'react-i18next';

import Echo from 'laravel-echo';
import socketIOClient from 'socket.io-client';
import { Abbreviation, MarketType, PriceType } from '../types';
import { DashLine } from './DashLine';

const host = process.env.NEXT_PUBLIC_SOCKET_HOST;

export const echo = new Echo({
  host,
  path: '/ws/socket.io',
  broadcaster: 'socket.io',
  client: socketIOClient,
});

const columns = [{ uid: 'coin' }, { uid: 'price' }, { uid: 'daily' }];

let initMarkets: MarketType[] = [
  {
    id: 'BTC',
    coin: 'BTC',
    price: '12900.35',
    daily: '',
  },
  {
    id: 'ETH',
    coin: 'ETH',
    price: '1620.09',
    daily: '',
  },
  {
    id: 'USDT',
    coin: 'USDT',
    price: '1.00',
    daily: '',
  },
  {
    id: 'TRX',
    coin: 'TRX',
    price: '0.06',
    daily: '',
  },
];

export const Market = () => {
  const { t } = useTranslation('common');
  const [markets, setMarkets] = useState(initMarkets);
  const [isExpanded, setExpanded] = useState(false);

  useCryptoChannel(setMarkets);
  useDailyChanges(markets);

  return (
    <Grid.Container
      id="Market"
      css={{
        mw: 1136,
        bg: '$secondaryLight',
        p: '$12',
        mt: '$20',
        mx: 'auto',
        borderRadius: 8,
        '@xsMax': { fs: 20, my: '$10' },
      }}>
      <Table
        striped
        css={{ mw: 1072, p: '$0' }}
        style={{ width: 'calc(100vw - 80px)' }}
        shadow={false}
        aria-label="Market Table"
        selectionMode="none">
        <Table.Header columns={columns} key="market-head">
          {column => (
            <Table.Column
              key={column.uid}
              css={{
                borderRadius: '0!important',
                textAlign: 'start',
                paddingLeft: '$5',
                paddingRight: '$5',
                background: 'transparent',
              }}>
              {t(column.uid)}
            </Table.Column>
          )}
        </Table.Header>

        <Table.Body items={isExpanded ? markets : markets.slice(0, 4)}>
          {item => (
            <Table.Row key={item.id || `${Math.random() * 100}`}>
              {columnKey => (
                <Table.Cell key={columnKey}>
                  {RenderCell(item, columnKey as keyof MarketType, t)}
                </Table.Cell>
              )}
            </Table.Row>
          )}
        </Table.Body>
      </Table>

      <Grid
        xs={12}
        css={{ mt: '$12' }}
        justify="space-between"
        alignItems="center">
        <DashLine />

        <Button
          light
          css={{ mx: 'auto' }}
          color="primary"
          ripple={false}
          onPress={() => {
            setExpanded(!isExpanded);
          }}>
          {isExpanded ? 'Show Less' : 'Show More'}
        </Button>

        <DashLine />
      </Grid>
    </Grid.Container>
  );
};

const RenderCell = (
  market: MarketType,
  columnKey: keyof MarketType,
  t: TFunction<'translation', undefined>,
) => {
  const cellValue = market[columnKey];

  switch (columnKey) {
    case 'coin':
      return (
        <Row align="center" justify="flex-start">
          <Row css={{ w: 32 }}>
            <Image
              css={{ mx: '$0 !important' }}
              src={`https://app.nakhlex.com/Images/Coins/${cellValue}.png`}
              alt="nakhlex market"
              width={32}
              height={32}
            />
          </Row>

          <Text css={{ mx: '$4' }} weight="bold">
            {cellValue}
          </Text>

          <Text>{t(cellValue)}</Text>
        </Row>
      );
    case 'price':
      return <Text>{parseFloat(cellValue).toFixed(2)} $</Text>;
    case 'daily':
      return (
        <Text
          color={+cellValue < 0 ? 'red' : 'green'}
          css={{ textAlign: 'end', direction: 'ltr' }}>
          {cellValue} %
        </Text>
      );

    default:
      return cellValue;
  }
};

const useDailyChanges = async (markets: MarketType[]) => {
  useEffect(() => {
    (async () => {
      if (markets && markets.length) {
        const newMarkets = await Promise.all(
          markets.map(async market => {
            const daily = market.daily || (await Coin1dayStatus(market.id));
            return { ...market, daily };
          }),
        );
        initMarkets = newMarkets;
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [markets]);
};

const Coin1dayStatus = async (id: Abbreviation) => {
  const myHeaders = new Headers();
  myHeaders.append('X-CoinAPI-Key', '3118103F-1992-4EE1-9588-3E205C1A0A1F');
  myHeaders.append('Accept', 'application/json');

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow' as RequestRedirect,
  };

  return await new Promise<string>(resolve => {
    fetch(
      `https://rest.coinapi.io/v1/exchangerate/${id}/USDT/history?period_id=1DAY&limit=1`,
      requestOptions,
    )
      .then(response => response.text())
      .then(body => JSON.parse(body))
      .then(result => {
        if (result && result.length) {
          resolve(
            `${(
              ((+result[0].rate_close - +result[0].rate_open) /
                (result[0].rate_open || 1)) *
              100
            ).toFixed(1)}`,
          );
        } else {
          resolve('0');
        }
      })
      .catch(() => {
        resolve('0');
      });
  });
};

const useCryptoChannel = (
  setMarkets: Dispatch<SetStateAction<MarketType[]>>,
) => {
  useEffect(() => {
    (async () =>
      echo
        .channel('crypto-channel-V2')
        .listen('.Price', async (event: PriceType) => {
          const prices = event.prices.global;

          const newMarkets = (Object.keys(prices) as Abbreviation[]).map(
            (id: Abbreviation) => {
              const index = initMarkets.findIndex(
                initItem => initItem.id === id,
              );

              if (index < 0) {
                const newMarketItem = {
                  id,
                  coin: id,
                  price: prices[id].USD,
                  daily: '',
                };

                initMarkets = [...initMarkets, newMarketItem];

                return newMarketItem;
              }

              return {
                ...initMarkets[index],
                price: prices[id].USD,
              };
            },
          );

          setMarkets(newMarkets.sort((a, b) => +b.price - +a.price));
        }))();

    return () => {
      echo.leave('');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
