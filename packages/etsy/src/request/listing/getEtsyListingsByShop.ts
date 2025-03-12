import {transformObjectValue} from '@coolcolduk/util';
import {EtsyListingStateEnum} from '../../enum/EtsyListingStateEnum';
import {EtsyParamIncludesEnum} from '../../enum/EtsyParamIncludesEnum';
import {EtsyParamSortOnEnum} from '../../enum/EtsyParamSortOnEnum';
import {EtsyParamSortOrderEnum} from '../../enum/EtsyParamSortOrderEnum';
import {EtsyListing} from '../../interfaces/EtsyListing';
import {EtsyList, EtsyResponseMany} from '../../interfaces/EtsyResponse';
import {getEtsyAxios} from '../../util/getEtsyAxios';

/**
 * Query parameters for the `getListingsByShop` function.
 */
export interface GetEtsyListingsByShopParams {
  state?: EtsyListingStateEnum; // Default: "active"
  limit?: number; // Default: 25, Range: [1, 100]
  offset?: number; // Default: 0, Min: 0
  sort_on?: EtsyParamSortOnEnum; // Default: "created"
  sort_order?: EtsyParamSortOrderEnum; // Default: "desc"
  includes?: EtsyParamIncludesEnum[]; // Optional associations to include
}

/**
 * Fetches Etsy listings for a specific shop.
 * @see https://developers.etsy.com/documentation/reference#operation/getListingsByShop
 * @requires scope listings_r
 * @param shopId - The unique numeric ID for an Etsy shop.
 * @param params - Optional query parameters for filtering and pagination.
 * @param apiKey - Your Etsy API key for authorization.
 * @returns A promise resolving to the Etsy listings response.
 */
export function getEtsyListingsByShop(
  apiKey: string,
  accessToken: string,
  shopId: number,
  params: GetEtsyListingsByShopParams = {},
): EtsyResponseMany<EtsyListing> {
  // Default query parameters
  const defaultParams: GetEtsyListingsByShopParams = {
    state: EtsyListingStateEnum.ACTIVE,
    limit: 25,
    offset: 0,
    sort_on: EtsyParamSortOnEnum.CREATED,
    sort_order: EtsyParamSortOrderEnum.DESC,
  };

  // Merge default params with user-provided params
  const queryParams = transformObjectValue({...defaultParams, ...params}, (v) => String(v));

  return getEtsyAxios(apiKey, accessToken, {params: new URLSearchParams(queryParams)}).get<EtsyList<EtsyListing>>(
    `/application/shops/${shopId}/listings`,
  );
}
