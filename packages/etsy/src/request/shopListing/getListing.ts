import {Maybe} from '@coolcolduk/typescript-util';
import axios, {AxiosResponse} from 'axios';
import {EtsyListingIncludesEnum, EtsyListingTranslateEnum} from '../../enum';
import {EtsyListing} from '../../interfaces';
import getEtsyRequestAxiosConfig from '../../util/getEtsyRequestAxiosConfig';

/**
 * Fetches the details of a specific listing.
 *
 * @param apiKey - The API key.
 * @param accessToken - The OAuth2 access token.
 * @param listingId - The ID of the listing to retrieve.
 * @param includes - Optional includes for additional data (e.g., "Images", "Shop").
 * @param language - The language for the response (e.g., "en").
 * @returns The details of the listing.
 */
export async function getListing(
  apiKey: string,
  accessToken: string,
  listingId: number,
  includes: EtsyListingIncludesEnum[] = [],
  language: Maybe<EtsyListingTranslateEnum> = null,
): Promise<AxiosResponse<EtsyListing>> {
  const params = new URLSearchParams({
    includes: includes.join(','),
  });

  if (language) {
    params.append('language', language);
  }

  return axios.get<EtsyListing>(
    `/application/listings/${listingId}?${params.toString()}`,
    getEtsyRequestAxiosConfig({accessToken, apiKey}),
  );
}
