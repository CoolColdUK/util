import {MimeType} from '@coolcolduk/enum';
import {EtsyListingProperty, UpdateEtsyListingPropertyRequest} from '../../interfaces/EtsyListingProperty';
import {EtsyResponse} from '../../interfaces/EtsyResponse';
import {getEtsyAxios} from '../../util/getEtsyAxios';

/**
 * Updates or populates the properties list defining product offerings for a listing.
 * @see https://developers.etsy.com/documentation/reference/#operation/updateListingProperty
 * @requires scope listing_w
 * @param apiKey - The API key.
 * @param secret - The API secret.
 * @param accessToken - The OAuth2 access token.
 * @param shopId - The ID of the shop.
 * @param listingId - The ID of the listing to update.
 * @param propertyId - The ID of the listing property to update.
 * @param updateData - The data to update the listing property with.
 * @returns The updated listing property details.
 */
export async function updateEtsyListingProperty(
  apiKey: string,
  secret: string,
  accessToken: string,
  shopId: number,
  listingId: number,
  propertyId: number,
  updateData: UpdateEtsyListingPropertyRequest,
): EtsyResponse<EtsyListingProperty> {
  return getEtsyAxios(apiKey, secret, accessToken, {
    contentType: MimeType.APPLICATION_FORM_URLENCODED,
  }).put<EtsyListingProperty>(
    `/application/shops/${shopId}/listings/${listingId}/properties/${propertyId}`,
    updateData,
  );
}
