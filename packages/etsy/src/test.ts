import {uploadEtsyListingVideo} from './request';

const apiKey = process.env['ETSY_API_KEY'] || '';
const accessToken = process.env['ETSY_ACCESS_TOKEN'] || '';
uploadEtsyListingVideo(apiKey, accessToken, 44385306, 1879360833, {
  video_id: 770944065,
}).then((r) => console.log(r));
