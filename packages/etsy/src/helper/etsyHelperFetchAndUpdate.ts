import {MaybeArray} from '@coolcolduk/typescript-util';
import {castArray, filterArrayUndefined} from '@coolcolduk/util';
import {merge, xor} from 'lodash';
import {EtsyParamIncludesEnum} from '../enum';
import {EtsyListing} from '../interfaces/EtsyListing';
import {UpdateEtsyListingRequest} from '../interfaces/UpdatedEtsyListing';
import {getEtsyListingsByListingIds} from '../request/listing/getEtsyListingsByListingIds';
import {mapEtsyListingToUpdateEtsyListingRequest} from '../util/map/mapEtsyListingToUpdateEtsyListingRequest';
import {etsyHelperUpdateAllListings} from './etsyHelperUpdateAllListings';

/**
 * Fetch and update multiple listings for a given shop.
 * @param apiKey - Etsy API key
 * @param accessToken - Etsy access token
 * @param shopId - Etsy shop ID
 * @param listingIds - Etsy listing IDs
 * @param includes - Etsy listing fields to include
 * @param updateData - Data to update
 * @returns Updated listings
 */
export async function etsyHelperFetchAndUpdate(
  apiKey: string,
  accessToken: string,
  shopId: number,
  listingIds: MaybeArray<number>,
  includes: EtsyParamIncludesEnum[] = [],
  updateData: Partial<EtsyListing>[] = [],
) {
  const listingIdsArray = castArray(listingIds);
  const existingListing = await getEtsyListingsByListingIds(apiKey, accessToken, listingIdsArray, includes);

  if (listingIdsArray.length !== existingListing.data.results.length) {
    const existingListingIds = existingListing.data.results.map((d) => d.listing_id);
    throw new Error(
      `Some listing cannot be fetched: ${listingIdsArray.filter((l) => !existingListingIds.includes(l))}`,
    );
  }

  const updatedListing = filterArrayUndefined(
    existingListing.data.results.map((l) => {
      const dataForUpdate = updateData.find((d) => d.listing_id === l.listing_id);
      if (!dataForUpdate) return undefined;

      const toBeUpdated = mapEtsyListingToUpdateEtsyListingRequest(l);

      const hasChanges = Object.entries(dataForUpdate).some(([key, value]) => {
        if (key === 'tags') {
          return xor(toBeUpdated.tags, value as string[]).length > 0;
        }
        return toBeUpdated[key as keyof UpdateEtsyListingRequest] !== value;
      });

      if (!hasChanges) {
        return undefined;
      }

      return {
        id: l.listing_id,
        data: {...merge(toBeUpdated, dataForUpdate), tags: dataForUpdate.tags || toBeUpdated.tags},
      };
    }),
  );

  return etsyHelperUpdateAllListings(apiKey, accessToken, shopId, updatedListing);
}
