import {repeatTillComplete} from '@coolcolduk/util';
import {EtsyParamIncludesEnum} from '../enum';
import {EtsyListing} from '../interfaces/EtsyListing';
import {EtsyList} from '../interfaces/EtsyResponse';
import {getEtsyListingsByShop, GetEtsyListingsByShopParams} from '../request/listing/getEtsyListingsByShop';

export interface EtsyHelperFetchAllListingParams extends Omit<GetEtsyListingsByShopParams, 'offset' | 'limit'> {
  shouldRetry?: (attemptCount: number, data?: EtsyList<EtsyListing>) => boolean;
}

/**
 * Fetch all listings from Etsy for a given shop. Loops until all listings are fetched.
 * @param apiKey - Etsy API key
 * @param accessToken - Etsy access token
 * @param shopId - Etsy shop ID
 * @param params - Parameters for the Etsy API request
 * @returns All listings from Etsy
 */
export async function etsyHelperFetchAllListing(
  apiKey: string,
  accessToken: string,
  shopId: number,
  params: EtsyHelperFetchAllListingParams,
) {
  const pageSize = 100;
  return repeatTillComplete<EtsyList<EtsyListing>>(
    async (prev) => {
      const result = await getEtsyListingsByShop(apiKey, accessToken, shopId, {
        limit: pageSize,
        offset: prev ? prev.results.length : 0,
        includes: [EtsyParamIncludesEnum.IMAGES, EtsyParamIncludesEnum.VIDEOS],
        ...params,
      });
      return {
        count: result.data.count,
        results: [...(prev?.results || []), ...result.data.results],
      };
    },
    (data) => data.count === data.results.length,
    params.shouldRetry || ((attemptCount, data) => !data || attemptCount < Math.ceil(data.count / pageSize) + 3),
    100,
  );
}
