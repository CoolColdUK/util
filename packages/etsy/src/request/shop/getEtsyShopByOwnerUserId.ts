import {EtsyResponse} from '../../interfaces/EtsyResponse';
import {EtsyShop} from '../../interfaces/EtsyShop';
import {getEtsyAxios} from '../../util/getEtsyAxios';

/**
 * Fetches the shop information based on the owner's user ID.
 * @see https://developers.etsy.com/documentation/reference#operation/getShopByOwnerUserId
 * @param apiKey - The API key
 * @param secret - The API secret
 * @param accessToken - The OAuth2 access token for authorization. (required even though the documentation says it doesn't)
 * @param userId - The user ID of the shop owner.
 * @returns Shop details as a promise of EtsyShop.
 */
export function getEtsyShopByOwnerUserId(
  apiKey: string,
  secret: string,
  accessToken: string,
  userId: number,
): EtsyResponse<EtsyShop> {
  return getEtsyAxios(apiKey, secret, accessToken).get<EtsyShop>(`/application/users/${userId}/shops`);
}
