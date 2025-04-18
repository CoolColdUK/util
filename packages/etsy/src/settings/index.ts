// export * from './etsyListingAllowedImageMimeType';
// export * from './etsyListingFileSupportedExtensions';
// export * from './etsyListingFileSupportedMimeTypes';

import {etsyListingDigitalSupportedExtensions, etsyListingDigitalSupportedMimeTypes} from './etsyListingDigital';
import {etsyListingImageSupportedExtensions, etsyListingImageSupportedMimeTypes} from './etsyListingImage';
import {etsyTagRegex} from './etsyListingTags';
import {etsyListingVideoSupportedExtensions, etsyListingVideoSupportedMimeTypes} from './etsyListingVideo';

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
