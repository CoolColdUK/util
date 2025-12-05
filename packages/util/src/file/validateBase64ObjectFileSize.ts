import {Base64Object} from './Base64Object';
import {base64ObjectToFile} from './base64ObjectToFile';

/**
 * Validate the size of a base64 object input file
 * @param base64Object
 * @param sizeLimit
 * @param errorMessage
 */
export function validateBase64ObjectFileSize(base64Object: Base64Object, sizeLimit: number, errorMessage?: string) {
  const fileObject = base64ObjectToFile(base64Object);
  if (fileObject.size > sizeLimit) {
    throw new Error(errorMessage || `File size exceeds limit of ${sizeLimit} bytes`);
  }
}
