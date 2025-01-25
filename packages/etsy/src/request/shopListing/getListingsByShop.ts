import axios, {AxiosResponse} from 'axios';
import {EtsyListingStateEnum} from '../../enum/EtsyListingStateEnum';
import {EtsyParamIncludesEnum} from '../../enum/EtsyParamIncludesEnum';
import {EtsyParamSortOnEnum} from '../../enum/EtsyParamSortOnEnum';
import {EtsyParamSortOrderEnum} from '../../enum/EtsyParamSortOrderEnum';
import {EtsyListings} from '../../interfaces/EtsyListings';
import getEtsyRequestAxiosConfig from '../../util/getEtsyRequestAxiosConfig';

/**
 * Query parameters for the `getListingsByShop` function.
 */
export interface GetListingsByShopParams {
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
export async function getListingsByShop(
  apiKey: string,
  accessToken: string,
  shopId: number,
  params: GetListingsByShopParams = {},
): Promise<AxiosResponse<EtsyListings>> {
  // Default query parameters
  const defaultParams: GetListingsByShopParams = {
    state: EtsyListingStateEnum.ACTIVE,
    limit: 25,
    offset: 0,
    sort_on: EtsyParamSortOnEnum.CREATED,
    sort_order: EtsyParamSortOrderEnum.DESC,
  };

  // Merge default params with user-provided params
  const queryParams = {...defaultParams, ...params};

  return axios.get<EtsyListings>(
    `/application/shops/${shopId}/listings`,
    getEtsyRequestAxiosConfig({
      accessToken,
      apiKey,
      params: queryParams,
    }),
  );
}
