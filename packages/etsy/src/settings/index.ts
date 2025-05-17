// export * from './etsyListingAllowedImageMimeType';
// export * from './etsyListingFileSupportedExtensions';
// export * from './etsyListingFileSupportedMimeTypes';

import {etsyListingDigitalSupportedExtensions, etsyListingDigitalSupportedMimeTypes} from './etsyListingDigital';
import {etsyListingImageSupportedExtensions, etsyListingImageSupportedMimeTypes} from './etsyListingImage';
import {etsyTagRegex} from './etsyListingTags';
import {etsyListingVideoSupportedExtensions, etsyListingVideoSupportedMimeTypes} from './etsyListingVideo';

// some info: https://support.gelato.com/en/articles/8996461-are-there-any-limitations-to-publishing-listings-on-etsy
export const etsySettings = {
  listing: {
    title: {
      maxLength: 140,
    },
    tags: {
      maxLength: 20,
      maxCount: 13,
      regex: etsyTagRegex,
    },
    sku: {
      maxLength: 32,
    },
    quantity: {
      min: 1,
      max: 100,
    },
    price: {
      min: 0.2,
      max: 50000,
    },
    digital: {
      extension: etsyListingDigitalSupportedExtensions,
      maxFileSizeMb: 20,
      maxNumber: 5,
      mimeType: etsyListingDigitalSupportedMimeTypes,
    },
    image: {
      extension: etsyListingImageSupportedExtensions,
      maxFileSizeMb: 10,
      maxNumber: 10,
      mimeType: etsyListingImageSupportedMimeTypes,
    },
    video: {
      extension: etsyListingVideoSupportedExtensions,
      maxFileSizeMb: 100,
      maxNumber: 1,
      mimeType: etsyListingVideoSupportedMimeTypes,
    },
  },
};
