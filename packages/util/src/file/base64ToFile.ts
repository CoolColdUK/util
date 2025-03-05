export function base64ToFile(base64String: string): File {
  const splitBar = base64String.split('|');

  const base64StringWithoutBar = splitBar.slice(2).join('|');

  // If the base64 string includes the data URL prefix, extract just the base64 data
  const base64Data = base64StringWithoutBar.includes('base64,')
    ? base64StringWithoutBar.split('base64,')[1]
    : base64StringWithoutBar;

  // Convert base64 to binary
  const byteString = atob(base64Data as string);

  // Convert binary string to ArrayBuffer
  const byteArray = new Uint8Array(byteString.length);
  for (let i = 0; i < byteString.length; i++) {
    byteArray[i] = byteString.charCodeAt(i);
  }

  // Determine MIME type if not provided
  const defaultMimeType = splitBar[1] || 'application/octet-stream';

  // Create and return File object
  return new File([byteArray], splitBar[0] as string, {type: defaultMimeType});
}
