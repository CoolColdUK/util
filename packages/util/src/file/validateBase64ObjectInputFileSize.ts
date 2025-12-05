import {Base64Object} from './Base64Object';
import {base64ObjectToFile} from './base64ObjectToFile';

/**
 *
 * @param base64Object
 * @param sizeLimit
 * @param errorMessage
 * @deprecated move with Base64Objectinput
 */
export default function validateBase64ObjectInputFileSize(
  base64Object: Base64Object,
  sizeLimit: number,
  errorMessage?: string,
) {
  const fileObject = base64ObjectToFile(base64Object);
  if (fileObject.size > sizeLimit) {
    throw new Error(errorMessage || `File size exceeds limit of ${sizeLimit} bytes`);
  }
}
