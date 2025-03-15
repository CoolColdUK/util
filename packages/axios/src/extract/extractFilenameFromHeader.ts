import {AxiosResponseHeaders, RawAxiosResponseHeaders} from 'axios';

/**
 * extract filename from header if available
 * @param axiosHeader
 * @returns
 */
export function extractFilenameFromHeader(
  axiosHeader: RawAxiosResponseHeaders | AxiosResponseHeaders,
): string | undefined {
  const headerContentType = axiosHeader['content-disposition'];
  if (typeof headerContentType !== 'string') return undefined;
  return headerContentType.split('filename=')[1];
}
