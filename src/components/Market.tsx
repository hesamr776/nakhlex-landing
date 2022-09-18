import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { Image, Row, Table, Text } from '@nextui-org/react';
import { useTranslation } from 'next-i18next';
import { TFunction } from 'react-i18next';

import Echo from 'laravel-echo';
import socketIOClient from 'socket.io-client';
import { Abbreviation, MarketType, PriceType } from '../types';

export const echo = new Echo({
  host: 'wss://staging.bitbayt.com',
  path: '/ws/socket.io',
  broadcaster: 'socket.io',
  client: socketIOClient,
});

const columns = [
  { name: 'Coin', uid: 'coin' },
  { name: 'Price', uid: 'price' },
  { name: '24h %', uid: 'daily' },
];

const initMarkets: MarketType[] = [
  {
    id: 'BTC',
    coin: 'BTC',
    price: '19902.49',
    daily: '2.4',
  },
  {
    id: 'ETH',
    coin: 'ETH',
    price: '1572.09',
    daily: '3.3',
  },
  {
    id: 'USDT',
    coin: 'USDT',
    price: '1.00',
    daily: '0.0',
  },
  {
    id: 'TRX',
    coin: 'TRX',
    price: '0.06',
    daily: '-2.3',
  },
];

export const Market = () => {
  const { t } = useTranslation('common');
  const [markets, setMarkets] = useState(initMarkets);

  use24CoinStatus();
  useCryptoChannel(setMarkets);

  return (
    <section id="Market">
      <Table
        striped
        sticked
        shadow={false}
        aria-label="Market Table"
        css={{
          height: 'auto',
          minWidth: '100%',
          my: '$20',
        }}
        selectionMode="none"
      >
        <Table.Header columns={columns}>
          {column => (
            <Table.Column key={column.uid}>{column.name}</Table.Column>
          )}
        </Table.Header>

        <Table.Body items={markets}>
          {item => (
            <Table.Row>
              {columnKey => (
                <Table.Cell>
                  {RenderCell(item, columnKey as keyof MarketType, t)}
                </Table.Cell>
              )}
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </section>
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
              src={`/${cellValue}.png`}
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
      return <Text>{parseFloat(cellValue).toFixed(2)}</Text>;
    case 'daily':
      return (
        <Text color={+cellValue < 0 ? 'red' : 'green'}>{cellValue} %</Text>
      );

    default:
      return cellValue;
  }
};

const use24CoinStatus = () => {
  // const myHeaders = new Headers();
  // myHeaders.append('Authorization', 'Bearer null');
  // myHeaders.append('Accept', 'application/json');

  // const requestOptions = {
  //   method: 'GET',
  //   headers: myHeaders,
  //   redirect: 'follow' as RequestRedirect,
  // };

  useEffect(() => {
    // fetch('https://staging.bitbayt.com/api/get24CoinStatus', requestOptions)
    //   .then(response => response.text())
    //   .then(result => console.log(result))
    //   .catch(error => console.log('error', error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

const useCryptoChannel = (
  setMarkets: Dispatch<SetStateAction<MarketType[]>>,
) => {
  useEffect(() => {
    echo.channel('crypto-channel').listen('.Price', (event: PriceType) => {
      const prices = event.prices.global;

      const newMarkets = (Object.keys(prices) as Abbreviation[]).map(id => {
        const index = initMarkets.findIndex(initItem => initItem.id === id);

        return {
          ...initMarkets[index],
          price: prices[id].USD,
        };
      });

      setMarkets(newMarkets);
    });

    return () => {
      echo.leave('');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
