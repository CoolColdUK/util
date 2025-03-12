import {MimeType} from '@coolcolduk/enum';
/**
 * etsy listing allowed video file extensions
 * @see https://help.etsy.com/hc/en-gb/articles/360053206073-How-to-Add-a-Listing-Video?segment=selling
 */
export const etsyListingVideoSupportedExtensions = ['.mov', '.mp4', '.flv', '.acc', '.avi', '.3pg', '.mpeg'];

export const etsyListingVideoSupportedMimeTypes = [
  MimeType.VIDEO_QUICKTIME,
  MimeType.VIDEO_MP4,
  MimeType.VIDEO_FLV,
  MimeType.VIDEO_AVI,
  MimeType.AUDIO_AAC,
  MimeType.VIDEO_3GP,
  MimeType.VIDEO_MPEG,
];
