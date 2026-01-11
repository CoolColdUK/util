import {MaybeArray} from '@coolcolduk/typescript-util';
import {castArray, filterArrayUndefined, mergeReplaceArray} from '@coolcolduk/util';
import {omit} from 'lodash';
import {EtsyParamIncludesEnum} from '../enum/EtsyParamIncludesEnum';
import {UpdateEtsyListingRequestWithId} from '../interfaces/UpdateEtsyListingRequestWithId';
import {hasEtsyListingChange} from '../util/helper/hasEtsyListingChange';
import {mapEtsyListingToUpdateEtsyListingRequest} from '../util/map/mapEtsyListingToUpdateEtsyListingRequest';
import {etsyHelperFetchAllListingsById} from './etsyHelperFetchAllListingsById';
import {etsyHelperUpdateAllListings} from './etsyHelperUpdateAllListings';

/**
 * Fetch and update multiple listings for a given shop.
 * @param apiKey - Etsy API key
 * @param apiSecret - Etsy API secret
 * @param accessToken - Etsy access token
 * @param shopId - Etsy shop ID
 * @param listingIds - Etsy listing IDs
 * @param updateData - Data to update
 * @param includes - Etsy listing fields to include
 * @returns Updated listings
 */
export async function etsyHelperFetchAndUpdate(
  apiKey: string,
  apiSecret: string,
  accessToken: string,
  shopId: number,
  updateData: MaybeArray<UpdateEtsyListingRequestWithId> = [],
  includes: EtsyParamIncludesEnum[] = [],
) {
  // data building
  const updateDataArray = castArray(updateData);
  const listingIdsArray = updateDataArray.map((d) => d.listing_id);

  // fetch existing listings
  const existingListings = await etsyHelperFetchAllListingsById(apiKey, apiSecret, accessToken, listingIdsArray, {
    includes,
  });

  // check if all listings are fetched
  if (listingIdsArray.length !== existingListings.results.length) {
    const existingListingIds = existingListings.results.map((d) => d.listing_id);
    throw new Error(
      `Some listing cannot be fetched: ${listingIdsArray.filter((l) => !existingListingIds.includes(l))}`,
    );
  }

  const newListingData = filterArrayUndefined(
    listingIdsArray.map((id) => {
      //find data required
      const dataForUpdate = updateDataArray.find((d) => d.listing_id === id);
      if (!dataForUpdate) return undefined;
      const originalListingData = existingListings.results.find((l) => l.listing_id === id);
      if (!originalListingData) return undefined;

      //map to update request
      const toBeUpdated = mapEtsyListingToUpdateEtsyListingRequest(originalListingData);

      //check if has changes
      const hasChanges = hasEtsyListingChange(toBeUpdated, omit(dataForUpdate, 'listing_id'));
      if (!hasChanges) {
        return undefined;
      }

      return mergeReplaceArray(toBeUpdated, dataForUpdate) as UpdateEtsyListingRequestWithId;
    }),
  );

  return etsyHelperUpdateAllListings(apiKey, apiSecret, accessToken, shopId, newListingData);
}
