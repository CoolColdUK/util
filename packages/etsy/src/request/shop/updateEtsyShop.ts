import {EtsyShop} from '../../interfaces';
import {EtsyResponse} from '../../interfaces/EtsyResponse';
import {getEtsyAxios} from '../../util/getEtsyAxios';

export interface UpdateEtsyShopRequest {
  /** A brief heading string for the shop's main page. */
  title: string;

  /** An announcement string to buyers that displays on the shop's homepage. */
  announcement: string;

  /** A message string sent to users who complete a purchase from this shop. */
  sale_message: string;

  /** A message string sent to users who purchase a digital item from this shop. */
  digital_sale_message: string;

  /** The shop's additional policies string (may be blank). */
  policy_additional: string;
}

/**
 * Update details of a specific shop.
 * @see https://developers.etsy.com/documentation/reference#operation/updateShop
 * @requires scope shops_r, shops_w
 * @param apiKey - The API key
 * @param accessToken - The OAuth2 access token for authorization.
 * @param shopId - The ID of the shop to update.
 * @param data - The fields to update in the shop.
 * @returns Updated shop details as a promise of EtsyShop.
 */
export function updateShop(
  apiKey: string,
  accessToken: string,
  shopId: number,
  data: UpdateEtsyShopRequest,
): EtsyResponse<EtsyShop> {
  return getEtsyAxios(apiKey, accessToken).put<EtsyShop>(`/application/shops/${shopId}`, data);
}
