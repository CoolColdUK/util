import {EtsyResponse} from '../../interfaces/EtsyResponse';
import {EtsyShop} from '../../interfaces/EtsyShop';
import {getEtsyAxios} from '../../util/getEtsyAxios';

/**
 * Retrieves the shop identified by a specific shop ID.
 * @see https://developers.etsy.com/documentation/reference#operation/getShop
 * @param apiKey - The API key
 * @param secret - The API secret
 * @param shopId - The unique positive non-zero numeric ID for an Etsy Shop.
 * @returns Shop details as a promise of EtsyShop.
 */
export function getShop(apiKey: string, secret: string, shopId: number): EtsyResponse<EtsyShop> {
  return getEtsyAxios(apiKey, secret).get<EtsyShop>(`/application/shops/${shopId}`);
}
