import {fetchFile} from '@coolcolduk/axios';
import {uploadEtsyListingVideo} from '../request/listingVideo/uploadEtsyListingVideo';

/**
 * Helper function to download video from url and upload to listing
 * @param videoUrl
 * @param videoFileName
 */
export async function etsyHelperDownloadUploadVideo(
  apiKey: string,
  accessToken: string,
  shopId: number,
  listingId: number,
  videoUrl: string,
  videoFileName: string,
) {
  const downloadFile = await fetchFile(videoUrl, videoFileName);

  return uploadEtsyListingVideo(apiKey, accessToken, shopId, listingId, {
    video: downloadFile,
    name: downloadFile.name,
  });
}
