import {IsoCurrencyCode} from '@coolcolduk/enum';
import {z, ZodType} from 'zod';

/**
 * Represents the price of a product or listing on Etsy.
 */
export interface EtsyPrice {
  /**
   * The amount represented by this data.
   */
  amount: number;

  /**
   * The divisor used to render the amount.
   * Example: If `amount` is 1000 and `divisor` is 100, the rendered price would be 10.00.
   */
  divisor: number;

  /**
   * The ISO currency code for this data (e.g., "USD", "EUR").
   */
  currency_code: IsoCurrencyCode;
}

export const zEtsyPrice = z.object({
  amount: z.number().int(),
  divisor: z.number().min(0).int(),
  currency_code: z.nativeEnum(IsoCurrencyCode),
}) satisfies ZodType<EtsyPrice>;
