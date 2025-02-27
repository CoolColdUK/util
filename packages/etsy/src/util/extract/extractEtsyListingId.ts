import {isEtsyListing} from '../is/isEtsyListing';

/**
 * Extract etsy listing id from url
 * @param url
 * @returns
 */
export function extractEtsyListingId(url: string): string | undefined {
  if (!isEtsyListing(url)) {
    return;
  }

  const regex = /\/listing\/(\d+)/;
  const match = url.match(regex) || undefined;

  return match ? match[1] : undefined;
}
