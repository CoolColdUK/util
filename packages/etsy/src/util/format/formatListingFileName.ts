/**
 * Format listing filename based on etsy requirement
 * @see https://help.etsy.com/hc/en-gb/articles/115015628347-How-to-Manage-Your-Digital-Listings?segment=selling
 * @param input
 * @returns
 */
export function formatListingFileName(input: string): string {
  // Remove any characters that are not alphanumeric, periods, underscores, or hyphens
  const sanitizedInput = input.replace(/[^a-zA-Z0-9._-]/g, '_');

  // Ensure the output is exactly 70 characters long
  // take it from the end to keep the file extension
  return sanitizedInput.substring(-70);
}
