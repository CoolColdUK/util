import {repeatTillComplete} from '@coolcolduk/util';
import {EtsyParamIncludesEnum} from '../enum';
import {EtsyListing} from '../interfaces/EtsyListing';
import {EtsyList} from '../interfaces/EtsyResponse';
import {getEtsyListingsByListingIds} from '../request/listing/getEtsyListingsByListingIds';

export interface EtsyHelperFetchAllListingsByIdParams {
  shouldRetry?: (attemptCount: number, data?: EtsyList<EtsyListing>) => boolean;
  includes?: EtsyParamIncludesEnum[];
}

/**
 * Fetch all listings from Etsy for a given listing IDs. Loops until all listings are fetched.
 * @param apiKey - Etsy API key
 * @param apiSecret - Etsy API secret
 * @param accessToken - Etsy access token
 * @param listingIds - Etsy listing IDs
 * @param params - Parameters for the Etsy API request
 * @returns All listings from Etsy
 */
export async function etsyHelperFetchAllListingsById(
  apiKey: string,
  apiSecret: string,
  accessToken: string,
  listingIds: number[],
  params: EtsyHelperFetchAllListingsByIdParams,
): Promise<EtsyList<EtsyListing>> {
  const pageSize = 100;
  return repeatTillComplete<EtsyList<EtsyListing>>(
    async (prev) => {
      const result = await getEtsyListingsByListingIds(
        apiKey,
        apiSecret,
        accessToken,
        listingIds.slice(prev?.results.length || 0, (prev?.results.length || 0) + pageSize),
        params.includes,
      );
      return {
        count: result.data.count,
        results: [...(prev?.results || []), ...result.data.results],
      };
    },
    (d) => d.results.length === listingIds.length,
    params.shouldRetry || ((attemptCount, data) => !data || attemptCount < Math.ceil(listingIds.length / 100) + 3),
    100,
  );
}
