import axios from 'axios';
import {EtsyResponse} from '../../interfaces/EtsyResponse';
import {EtsyShop} from '../../interfaces/EtsyShop';
import getEtsyRequestAxiosConfig from '../../util/getEtsyRequestAxiosConfig'; // Adjust the import path as needed

/**
 * Fetches the shop information based on the owner's user ID.
 * @see https://developers.etsy.com/documentation/reference#operation/getShopByOwnerUserId
 * @param apiKey - The API key
 * @param accessToken - The OAuth2 access token for authorization. (required even though the documentation says it doesn't)
 * @param userId - The user ID of the shop owner.
 * @returns Shop details as a promise of EtsyShop.
 */
export function getEtsyShopByOwnerUserId(apiKey: string, accessToken: string, userId: number): EtsyResponse<EtsyShop> {
  return axios.get<EtsyShop>(`/application/users/${userId}/shops`, getEtsyRequestAxiosConfig({apiKey, accessToken}));
}
