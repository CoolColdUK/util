import {getEtsyListingVideos, uploadEtsyListingVideo} from './request';
import {getEtsyListingVideo} from './request/shopListingVideo/getEtsyListingVideo';
import {getFile} from './util/helper/getFile';

const apiKey = process.env['ETSY_API_KEY'] || '';
const accessToken = process.env['ETSY_ACCESS_TOKEN'] || '';
const listingId = parseInt(process.env['ETSY_LISTING_ID'] || '');
const shopId = parseInt(process.env['ETSY_SHOP_ID'] || '');

async function downloadLinkedVideo(apiKey: string, accessToken: string, listingId: number, videoId: number) {
  const video = await getEtsyListingVideo(apiKey, accessToken, listingId, videoId);
  console.log(
    'download video info',
    video,
    video.data.video_url.split('/').at(-1),
    `video/${video.data.video_url.split('.').at(-1)}`,
  );
  return getFile(
    video.data.video_url,
    video.data.video_url.split('/').at(-1) as string,
    `video/${video.data.video_url.split('.').at(-1) as string}`,
  );
}

async function main() {
  // const listing = await getEtsyListing(apiKey, accessToken, listingId, [EtsyParamIncludesEnum.VIDEOS]);
  // console.log('listing', JSON.stringify(listing.data)); //:770944065

  const videos = await getEtsyListingVideos(apiKey, accessToken, listingId);
  const videoId = videos.data.results[0]?.video_id;
  if (!videoId) throw new Error('cannot find video');
  console.log('get list of videos', JSON.stringify(videos.data));
  console.log('sss', {
    video_id: videos.data.results[0]?.video_id,
  });

  const video = await downloadLinkedVideo(apiKey, accessToken, listingId, videos.data.results[0]?.video_id || 0);
  console.log('download video result', video);
  const videoResult = await uploadEtsyListingVideo(apiKey, accessToken, shopId, 1879421397, {
    // video_id: videos.data.results[0]?.video_id,
    video,
    name: video.name,
  });
  console.log(JSON.stringify(videoResult.data));
}

main();
