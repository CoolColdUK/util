import {fetchFile} from '@coolcolduk/axios';
import {EtsyListingVideo} from '../interfaces/EtsyListingVideo';
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
): Promise<EtsyListingVideo> {
  const downloadFile = await fetchFile(videoUrl, videoFileName);

  return (
    await uploadEtsyListingVideo(apiKey, accessToken, shopId, listingId, {
      video: downloadFile,
      name: downloadFile.name,
    })
  ).data;
}
