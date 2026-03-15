import {EtsyShippingProfile} from '../../interfaces/EtsyShippingProfile';
import {EtsyList, EtsyResponseMany} from '../../interfaces/EtsyResponse';
import {getEtsyAxios} from '../../util/getEtsyAxios';

/**
 * Retrieves a list of shipping profiles available in the specific Etsy shop identified by its shop ID.
 * @see https://developers.etsy.com/documentation/reference#operation/getShopShippingProfiles
 * @requires scope shops_r
 * @param apiKey - The API key
 * @param secret - The API secret
 * @param accessToken - The OAuth2 access token
 * @param shopId - The unique positive non-zero numeric ID for an Etsy Shop
 * @returns A list of shipping profiles (count and results)
 */
export function getEtsyShopShippingProfiles(
  apiKey: string,
  secret: string,
  accessToken: string,
  shopId: number,
): EtsyResponseMany<EtsyShippingProfile> {
  return getEtsyAxios(apiKey, secret, accessToken).get<EtsyList<EtsyShippingProfile>>(
    `/application/shops/${shopId}/shipping-profiles`,
  );
}
