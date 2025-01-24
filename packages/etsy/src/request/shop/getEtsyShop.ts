import axios, {AxiosResponse} from 'axios';
import {EtsyShop} from '../../interfaces/EtsyShop';
import getEtsyRequestAxiosConfig from '../../util/getEtsyRequestAxiosConfig';

/**
 * Retrieves the shop identified by a specific shop ID.
 * @param apiKey - The API key
 * @param shopId - The unique positive non-zero numeric ID for an Etsy Shop.
 * @returns Shop details as a promise of EtsyShop.
 */
export function getShop(apiKey: string, shopId: number): Promise<AxiosResponse<EtsyShop>> {
  return axios.get<EtsyShop>(`/application/shops/${shopId}`, getEtsyRequestAxiosConfig({apiKey}));
}
