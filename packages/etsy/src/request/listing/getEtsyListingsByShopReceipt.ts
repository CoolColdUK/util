import {filterObject, transformObjectValue} from '@coolcolduk/util';
import {EtsyListing} from '../../interfaces/EtsyListing';
import {EtsyList, EtsyResponseMany} from '../../interfaces/EtsyResponse';
import {getEtsyAxios} from '../../util/getEtsyAxios';

/**
 * Query parameters for fetching listings by shop receipt.
 */
export interface GetEtsyListingsByShopReceiptParams {
  /**
   * The maximum number of results to return. Default is 25.
   * Range: [1, 100].
   */
  limit?: number;

  /**
   * The number of results to skip before starting the selection. Default is 0.
   * Minimum: 0.
   */
  offset?: number;
}

/**
 * Fetches listings associated with a specific shop receipt.
 * @see https://developers.etsy.com/documentation/reference/#operation/getListingsByShopReceipt
 * @requires scope transactions_r
 * @param apiKey - The API key for Etsy API authentication.
 * @param secret - The API secret.
 * @param accessToken - The OAuth2 access token for authorization.
 * @param shopId - The unique numeric ID of the shop.
 * @param receiptId - The numeric ID of the receipt associated with this transaction.
 * @param params - Optional query parameters for pagination.
 * @returns A promise resolving to the EtsyListings response.
 */
export function getEtsyListingsByShopReceipt(
  apiKey: string,
  secret: string,
  accessToken: string,
  shopId: number,
  receiptId: number,
  getListingParams: GetEtsyListingsByShopReceiptParams = {},
): EtsyResponseMany<EtsyListing> {
  const recRemoveUndefined = filterObject(
    getListingParams as Record<string, number | undefined>,
    (d) => d !== undefined,
  );
  const recStr = transformObjectValue(recRemoveUndefined, (v) => String(v));
  const params = new URLSearchParams(recStr);

  // Add query parameters if provided
  // if (getListingParams?.limit) params.append('limit', getListingParams.limit.toString());
  // if (getListingParams?.offset) params.append('offset', getListingParams.offset.toString());

  return getEtsyAxios(apiKey, secret, accessToken, {params}).get<EtsyList<EtsyListing>>(
    `/application/shops/${shopId}/receipts/${receiptId}/listings`,
  );
}
