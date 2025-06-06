import {xor} from 'lodash';
import {UpdateEtsyListingRequest} from '../..';

/**
 * Check if the listing has changed
 * @param originalListingUpdateRequest - The original listing
 * @param updatedField - The updated field
 * @returns True if the listing has changed, false otherwise
 */
export function hasEtsyListingChange(
  originalListingUpdateRequest: UpdateEtsyListingRequest,
  updatedField: Partial<UpdateEtsyListingRequest>,
) {
  return Object.entries(updatedField).some(([key, value]) => {
    if (key === 'tags') {
      return xor(originalListingUpdateRequest.tags, value as string[]).length > 0;
    }
    return originalListingUpdateRequest[key as keyof UpdateEtsyListingRequest] !== value;
  });
}
