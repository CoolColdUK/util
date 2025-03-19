/**
 * Validates if a URL is a Google Drive shared link likely set to "Anyone with the link".
 * Note: This only checks the URL pattern and assumes public access; use API for definitive validation.
 * @param url - The URL to validate.
 * @returns True if the URL matches a Google Drive shared link pattern, false otherwise.
 */
export function isGDriveSharedLink(url: string): boolean {
  // Trim whitespace and ensure it's a string
  if (typeof url !== 'string' || url.trim() === '') {
    return false;
  }

  // Common Google Drive shared link patterns
  const patterns = [
    // Standard sharing link: https://drive.google.com/drive/folders/[FOLDER_ID]?usp=sharing
    /^https:\/\/drive\.google\.com\/drive\/folders\/[A-Za-z0-9_-]+(\?.*)?$/,
    // Standard sharing link: https://drive.google.com/file/d/[FILE_ID]/view?usp=sharing
    /^https:\/\/drive\.google\.com\/file\/d\/[A-Za-z0-9_-]+\/view(\?.*)?$/,
    // Alternative sharing link: https://drive.google.com/open?id=[FILE_ID]
    /^https:\/\/drive\.google\.com\/open\?id=[A-Za-z0-9_-]+$/,
    // Shortened link: https://drive.google.com/uc?id=[FILE_ID]
    /^https:\/\/drive\.google\.com\/uc\?id=[A-Za-z0-9_-]+$/,
  ];

  // Check if the URL matches any pattern
  return patterns.some((pattern) => pattern.test(url.trim()));
}
