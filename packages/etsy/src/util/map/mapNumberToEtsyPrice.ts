import {IsoCurrencyCode} from '@coolcolduk/enum';
import {EtsyPrice} from '../../interfaces/EtsyPrice';

export interface MapNumberToEtsyPriceOptions {
  /**
   * Divisor to convert decimal to smallest currency unit (e.g. 100 for USD cents).
   * @default 100
   */
  divisor?: number;

  /**
   * ISO 4217 currency code.
   * @default IsoCurrencyCode.UNITED_STATES_DOLLAR
   */
  currency_code?: IsoCurrencyCode;
}

const DEFAULT_DIVISOR = 100;
const DEFAULT_CURRENCY_CODE = IsoCurrencyCode.UNITED_STATES_DOLLAR;

/**
 * Maps a decimal price (e.g. 10.50) to Etsy Money object (amount, divisor, currency_code).
 * @see https://developers.etsy.com/documentation/essentials/definitions (Money object)
 */
export function mapNumberToEtsyPrice(value: number, options: MapNumberToEtsyPriceOptions = {}): EtsyPrice {
  const divisor = options.divisor ?? DEFAULT_DIVISOR;
  const currency_code = options.currency_code ?? DEFAULT_CURRENCY_CODE;
  const amount = Math.round(value * divisor);
  return {amount, divisor, currency_code};
}
