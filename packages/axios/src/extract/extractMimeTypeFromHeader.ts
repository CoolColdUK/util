import {MimeType} from '@coolcolduk/enum';
import {mapStringToEnumValue} from '@coolcolduk/util';
import {AxiosResponseHeaders, RawAxiosResponseHeaders} from 'axios';

/**
 * extract mime type from header if available
 * @param axiosHeader
 * @returns
 */
export function extractMimeTypeFromHeader(
  axiosHeader: RawAxiosResponseHeaders | AxiosResponseHeaders,
): MimeType | undefined {
  const headerContentType = axiosHeader['content-type'];
  if (typeof headerContentType !== 'string') return undefined;
  const extractedStr = headerContentType.split(';')[0];
  return extractedStr ? mapStringToEnumValue(MimeType, extractedStr) : undefined;
}
