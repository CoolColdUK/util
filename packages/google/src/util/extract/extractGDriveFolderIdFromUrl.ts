export function extractGDriveFolderIdFromUrl(url: string): string | undefined {
  const match = url.match(/folders\/([a-zA-Z0-9_-]+)/);
  return match?.[1];
}
