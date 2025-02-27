export function isEtsyListing(url: string): boolean {
  const etsyListingRegex = /^https:\/\/www\.etsy\.com\/[a-z]{2}\/listing\/\d+\/[a-zA-Z0-9-]+/;
  return etsyListingRegex.test(url);
}
