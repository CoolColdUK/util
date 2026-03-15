import {filterObjectEmpty} from '@coolcolduk/util';
import {CreateEtsyDraftListingRequest, CreateEtsyDraftListingResponse} from '../../interfaces/CreateEtsyDraftListing';
import {EtsyResponse} from '../../interfaces/EtsyResponse';
import {getEtsyAxios} from '../../util/getEtsyAxios';

/**
 * Creates a draft listing in a shop on the Etsy channel.
 * Matches: POST /application/shops/{shop_id}/listings (createDraftListing).
 * @see https://developers.etsy.com/documentation/reference/#operation/createDraftListing
 * @requires scope listings_w
 * @param apiKey - The API key.
 * @param secret - The API secret.
 * @param accessToken - The OAuth2 access token for authorization.
 * @param shopId - The unique positive non-zero numeric ID for an Etsy Shop.
 * @param data - The data required to create a draft listing.
 * @returns Promise of Axios response whose data is the created draft listing (CreateEtsyDraftListingResponse).
 */
export function createEtsyDraftListing(
  apiKey: string,
  secret: string,
  accessToken: string,
  shopId: number,
  data: CreateEtsyDraftListingRequest,
): EtsyResponse<CreateEtsyDraftListingResponse> {
  return getEtsyAxios(apiKey, secret, accessToken).post<CreateEtsyDraftListingResponse>(
    `/application/shops/${shopId}/listings`,
    filterObjectEmpty(data as unknown as Record<string, unknown>),
  );
}
