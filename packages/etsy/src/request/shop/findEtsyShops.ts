import axios, {AxiosResponse} from 'axios';
import {EtsyShop} from '../../interfaces/EtsyShop';
import getEtsyRequestAxiosConfig from '../../util/getEtsyRequestAxiosConfig'; // Adjust the import path

export interface FindEtsyShopsResponse {
  /** The total number of Shops. */
  count: number;

  /** The Shop resources. */
  results: EtsyShop[];
}

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
): Promise<AxiosResponse<FindEtsyShopsResponse>> {
  const params = new URLSearchParams({
    shop_name: shopName,
    limit: limit.toString(),
    offset: offset.toString(),
  });

  return axios.get<FindEtsyShopsResponse>(
    `/application/shops?${params.toString()}`,
    getEtsyRequestAxiosConfig({apiKey}),
  );
}
