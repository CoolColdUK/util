import axios from 'axios';
import {EtsyListing} from '../../interfaces/EtsyListing';
import {EtsyList, EtsyResponseMany} from '../../interfaces/EtsyResponse';
import getEtsyRequestAxiosConfig from '../../util/getEtsyRequestAxiosConfig';

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
 * @requires scope transactions_r
 * @param apiKey - The API key for Etsy API authentication.
 * @param accessToken - The OAuth2 access token for authorization.
 * @param shopId - The unique numeric ID of the shop.
 * @param receiptId - The numeric ID of the receipt associated with this transaction.
 * @param params - Optional query parameters for pagination.
 * @returns A promise resolving to the EtsyListings response.
 */
export function getEtsyListingsByShopReceipt(
  apiKey: string,
  accessToken: string,
  shopId: number,
  receiptId: number,
  params?: GetEtsyListingsByShopReceiptParams,
): EtsyResponseMany<EtsyListing> {
  const queryParams = new URLSearchParams();

  // Add query parameters if provided
  if (params?.limit) queryParams.append('limit', params.limit.toString());
  if (params?.offset) queryParams.append('offset', params.offset.toString());

  return axios.get<EtsyList<EtsyListing>>(
    `/application/shops/${shopId}/receipts/${receiptId}/listings?${queryParams.toString()}`,
    getEtsyRequestAxiosConfig({accessToken, apiKey}),
  );
}
