export type Abbreviation = 'BTC' | 'ETH' | 'TRX' | 'USDT';

export type PriceType = {
  prices: {
    global: { [key in Abbreviation]: { USD: string; IQD: string } };
  };
};

export type MarketType = {
  id: Abbreviation;
  coin: Abbreviation;
  price: string;
  daily: string;
};

export type MarketListType = { [key in Abbreviation]: MarketType };
