import {z} from 'zod';

/**
 * Request data for uploading an image to an Etsy listing.
 * @see https://developers.etsy.com/documentation/reference/#operation/uploadListingImage
 */
export interface UploadEtsyListingImageRequest {
  /**
   * The file to upload. Can be a File object in the browser or a binary string.
   * Required field.
   */
  image?: File | string;

  /**
   * The numeric ID of the primary listing image for this transaction.
   * Optional, must be an integer >= 1.
   */
  listing_image_id?: number;

  /**
   * The positive non-zero numeric position in the images displayed in a listing.
   * Optional, defaults to 1, must be an integer >= 0.
   */
  rank?: number;

  /**
   * When true, this request replaces the existing image at a given rank.
   * Optional, defaults to false.
   */
  overwrite?: boolean;

  /**
   * When true, indicates that the uploaded image has a watermark.
   * Optional, defaults to false.
   */
  is_watermarked?: boolean;

  /**
   * Alt text for the listing image. Max length 250 characters.
   * Optional, defaults to an empty string.
   */
  alt_text?: string;
}

export const zUploadEtsyListingImageRequest = z.object({
  image: z.instanceof(File).optional(),
  listing_image_id: z.number().int().min(1, {message: 'listing_image_id must be an integer >= 1'}).optional(), // Integer >= 1, optional
  rank: z.number().int().min(0, {message: 'rank must be an integer >= 0'}).default(1).optional(), // Integer >= 0, defaults to 1
  overwrite: z.boolean().default(false).optional(), // Boolean, defaults to false
  is_watermarked: z.boolean().default(false).optional(), // Boolean, defaults to false
  alt_text: z.string().max(250, {message: 'alt_text must not exceed 250 characters'}).default('').optional(), // String, max 250 chars, defaults to ''
}) satisfies z.ZodType<UploadEtsyListingImageRequest>;

/**
 * Response data from uploading an image to an Etsy listing.
 * @see https://developers.etsy.com/documentation/reference/#operation/uploadListingImage
 */
export interface UploadEtsyListingImageResponse {
  /**
   * The numeric ID for the listing associated with this transaction.
   * Integer >= 1.
   */
  listing_id: number;

  /**
   * The numeric ID of the primary listing image for this transaction.
   * Integer >= 1.
   */
  listing_image_id: number;

  /**
   * The webhex string for the image's average color, in webhex notation.
   * Nullable.
   */
  hex_code: string | null;

  /**
   * The numeric red value equal to the image's average red value, from 0-255 (RGB color).
   * Nullable.
   */
  red: number | null;

  /**
   * The numeric green value equal to the image's average green value, from 0-255 (RGB color).
   * Nullable.
   */
  green: number | null;

  /**
   * The numeric blue value equal to the image's average blue value, from 0-255 (RGB color).
   * Nullable.
   */
  blue: number | null;

  /**
   * The numeric hue equal to the image's average hue, from 0-360 (HSV color).
   * Nullable.
   */
  hue: number | null;

  /**
   * The numeric saturation equal to the image's average saturation, from 0-100 (HSV color).
   * Nullable.
   */
  saturation: number | null;

  /**
   * The numeric brightness equal to the image's average brightness, from 0-100 (HSV color).
   * Nullable.
   */
  brightness: number | null;

  /**
   * When true, the image is in black & white.
   * Nullable.
   */
  is_black_and_white: boolean | null;

  /**
   * The listing image's creation time, in epoch seconds.
   * Integer >= 0.
   */
  creation_tsz: number;

  /**
   * The listing image's creation time, in epoch seconds.
   * Integer >= 0.
   */
  created_timestamp: number;

  /**
   * The positive non-zero numeric position in the images displayed in a listing.
   * Integer >= 0.
   */
  rank: number;

  /**
   * The URL string for a 75x75 pixel thumbnail of the image.
   */
  url_75x75: string;

  /**
   * The URL string for a 170x135 pixel thumbnail of the image.
   */
  url_170x135: string;

  /**
   * The URL string for a thumbnail of the image, no more than 570 pixels wide with variable height.
   */
  url_570xN: string;

  /**
   * The URL string for the full-size image, up to 3000 pixels in each dimension.
   */
  url_fullxfull: string;

  /**
   * The numeric height, measured in pixels, of the full-sized image referenced in url_fullxfull.
   * Nullable, Integer >= 0.
   */
  full_height: number | null;

  /**
   * The numeric width, measured in pixels, of the full-sized image referenced in url_fullxfull.
   * Nullable, Integer >= 0.
   */
  full_width: number | null;

  /**
   * Alt text for the listing image. Max length 250 characters.
   * Nullable.
   */
  alt_text: string | null;
}
