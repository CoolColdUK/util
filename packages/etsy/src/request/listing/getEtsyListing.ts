import {Maybe} from '@coolcolduk/typescript-util';
import {EtsyListingTranslateEnum} from '../../enum/EtsyListingTranslateEnum';
import {EtsyParamIncludesEnum} from '../../enum/EtsyParamIncludesEnum';
import {EtsyListing, EtsyResponse} from '../../interfaces';
import {getEtsyAxios} from '../../util/getEtsyAxios';

/**
 * Fetches the details of a specific listing.
 * @see https://developers.etsy.com/documentation/reference#operation/getListing
 * @param apiKey - The API key.
 * @param accessToken - The OAuth2 access token.
 * @param listingId - The ID of the listing to retrieve.
 * @param includes - Optional includes for additional data (e.g., "Images", "Shop").
 * @param language - The language for the response (e.g., "en").
 * @returns The details of the listing.
 */
export function getEtsyListing(
  apiKey: string,
  accessToken: string,
  listingId: number,
  includes: EtsyParamIncludesEnum[] = [],
  language: Maybe<EtsyListingTranslateEnum> = null,
): EtsyResponse<EtsyListing> {
  const params = new URLSearchParams({
    includes: includes.join(','),
  });

  if (language) {
    params.append('language', language);
  }

  return getEtsyAxios(apiKey, accessToken, {params}).get<EtsyListing>(`/application/listings/${listingId}`);
}
