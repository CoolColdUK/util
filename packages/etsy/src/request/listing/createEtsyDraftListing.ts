import {filterObject} from '@coolcolduk/util';
import {CreateEtsyDraftListingRequest, CreateEtsyDraftListingResponse} from '../../interfaces/CreateEtsyDraftListing';
import {EtsyResponse} from '../../interfaces/EtsyResponse';
import {getEtsyAxios} from '../../util/getEtsyAxios';

/**
 * Creates a physical draft listing product in a shop on the Etsy channel.
 * @see https://developers.etsy.com/documentation/reference#operation/createDraftListing
 * @requires scope listings_w
 * @param apiKey - The API key.
 * @param accessToken - The OAuth2 access token for authorization.
 * @param shopId - The unique positive non-zero numeric ID for an Etsy Shop.
 * @param data - The data required to create a draft listing.
 * @returns Created draft listing details as a promise of EtsyListingDraftResponse.
 */
export function createEtsyDraftListing(
  apiKey: string,
  accessToken: string,
  shopId: number,
  data: CreateEtsyDraftListingRequest,
): EtsyResponse<CreateEtsyDraftListingResponse> {
  return getEtsyAxios(apiKey, accessToken).post<CreateEtsyDraftListingResponse>(
    `/application/shops/${shopId}/listings`,
    filterObject(data as Record<string, any>, (_key, v) => !!v),
  );
}
