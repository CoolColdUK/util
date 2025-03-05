import {Base64Object} from './Base64Object';

export function base64ObjectToFile(base64Object: Base64Object): File {
  // If the base64 string includes the data URL prefix, extract just the base64 data
  const base64Data = base64Object.data.includes('base64,') ? base64Object.data.split('base64,')[1] : base64Object.data;

  // Convert base64 to binary
  const byteString = atob(base64Data as string);

  // Convert binary string to ArrayBuffer
  const byteArray = new Uint8Array(byteString.length);
  for (let i = 0; i < byteString.length; i++) {
    byteArray[i] = byteString.charCodeAt(i);
  }

  // Determine MIME type if not provided
  const defaultMimeType = base64Object.type || 'application/octet-stream';

  // Create and return File object
  return new File([byteArray], base64Object.name, {type: defaultMimeType});
}
