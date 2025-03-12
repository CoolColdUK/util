import {EtsyList, EtsyResponseMany} from '../../interfaces/EtsyResponse';
import {EtsyShop} from '../../interfaces/EtsyShop';
import {getEtsyAxios} from '../../util/getEtsyAxios';

/**
 * Fetches a list of Etsy shops based on the provided parameters.
 * @see https://developers.etsy.com/documentation/reference#operation/findShops
 * @param apiKey - The API key
 * @param shopName - The shop's name string (required).
 * @param limit - The maximum number of results to return (default: 25).
 * @param offset - The number of records to skip before selecting the first result (default: 0).
 * @returns A list of Etsy shops as a promise of FindEtsyShopsResponse.
 */
export function findEtsyShops(
  apiKey: string,
  shopName: string,
  limit: number = 25,
  offset: number = 0,
): EtsyResponseMany<EtsyShop> {
  const params = new URLSearchParams({
    shop_name: shopName,
    limit: limit.toString(),
    offset: offset.toString(),
  });

  return getEtsyAxios(apiKey).get<EtsyList<EtsyShop>>(`/application/shops?${params.toString()}`);
}
