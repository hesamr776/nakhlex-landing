import { Image, Row, Table, Text } from '@nextui-org/react';
import { useTranslation } from 'next-i18next';
import { TFunction } from 'react-i18next';

const columns = [
  { name: 'Coin', uid: 'coin' },
  { name: 'Price', uid: 'price' },
  { name: '24h %', uid: 'daily' },
];

const markets: MarketType[] = [
  {
    id: 'BTC',
    coin: 'BTC',
    price: '21234.321341423',
    daily: '2.4',
  },
  {
    id: 'ETH',
    coin: 'ETH',
    price: '1634.321341423',
    daily: '3.3',
  },
  {
    id: 'TRX',
    coin: 'TRX',
    price: '0.321341423',
    daily: '-2.3',
  },
];
type abbreviation = 'BTC' | 'ETH' | 'TRX';

type MarketType = {
  id: abbreviation;
  coin: abbreviation;
  price: string;
  daily: string;
};

export const Market = () => {
  const { t } = useTranslation();

  return (
    <Table
      striped
      sticked
      shadow={false}
      aria-label="Market Table"
      css={{
        height: 'auto',
        minWidth: '100%',
        my: '$20',
        pr: '$12',
      }}
      selectionMode="none"
    >
      <Table.Header columns={columns}>
        {column => <Table.Column key={column.uid}>{column.name}</Table.Column>}
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
