import {Maybe} from '@coolcolduk/typescript-util';
import {buildObjectWhenExists} from '@coolcolduk/util';
import {EtsyListingTranslateEnum} from '../../enum/EtsyListingTranslateEnum';
import {EtsyParamIncludesEnum} from '../../enum/EtsyParamIncludesEnum';
import {EtsyListing, EtsyResponse} from '../../interfaces';
import {getEtsyAxios} from '../../util/getEtsyAxios';

/**
 * Fetches a single listing by ID.
 * Matches: GET /application/listings/{listing_id} (getListing).
 * @see https://developers.etsy.com/documentation/reference/#operation/getListing
 * @requires scope listings_r
 * @param apiKey - The API key.
 * @param secret - The API secret.
 * @param accessToken - The OAuth2 access token.
 * @param listingId - The numeric listing ID (path parameter).
 * @param includes - Optional: Shipping, Images, Shop, User, Translations, Inventory, Videos (comma-separated).
 * @param language - Optional language for translations (e.g. "en", "fr").
 * @returns Promise of Axios response with EtsyListing (Shop Listing schema).
 */
export function getEtsyListing(
  apiKey: string,
  secret: string,
  accessToken: string,
  listingId: number,
  includes: EtsyParamIncludesEnum[] = [],
  language: Maybe<EtsyListingTranslateEnum> = null,
): EtsyResponse<EtsyListing> {
  const hasIncludes = includes.length > 0;
  const params =
    hasIncludes || language
      ? {
          ...buildObjectWhenExists('includes', hasIncludes ? includes.join(',') : undefined),
          ...buildObjectWhenExists('language', language ?? undefined),
        }
      : undefined;

  return getEtsyAxios(apiKey, secret, accessToken, {params}).get<EtsyListing>(`/application/listings/${listingId}`);
}
