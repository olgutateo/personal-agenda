export interface CurrencyInterface {
  date: string;
  amount: number;
  base: string;
  rates: {
    GBP: number;
    RON: number;
    USD: number;
  };
}
