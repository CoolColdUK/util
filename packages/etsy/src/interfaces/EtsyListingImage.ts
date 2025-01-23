import {Maybe} from '@coolcolduk/typescript-util'; // Adjust import as needed

/**
 * Represents a single listing image resource in Etsy.
 */
export interface EtsyListingImage {
  /**
   * The numeric ID for the listing associated with this image.
   */
  listing_id: number;

  /**
   * The numeric ID of the primary listing image for this transaction.
   */
  listing_image_id: number;

  /**
   * The webhex string for the image's average color, in webhex notation.
   */
  hex_code: Maybe<string>;

  /**
   * The numeric red value equal to the image's average red value, from 0-255 (RGB color).
   */
  red: Maybe<number>;

  /**
   * The numeric green value equal to the image's average green value, from 0-255 (RGB color).
   */
  green: Maybe<number>;

  /**
   * The numeric blue value equal to the image's average blue value, from 0-255 (RGB color).
   */
  blue: Maybe<number>;

  /**
   * The numeric hue equal to the image's average hue, from 0-360 (HSV color).
   */
  hue: Maybe<number>;

  /**
   * The numeric saturation equal to the image's average saturation, from 0-100 (HSV color).
   */
  saturation: Maybe<number>;

  /**
   * The numeric brightness equal to the image's average brightness, from 0-100 (HSV color).
   */
  brightness: Maybe<number>;

  /**
   * When true, the image is in black & white.
   */
  is_black_and_white: Maybe<boolean>;

  /**
   * The listing image's creation time, in epoch seconds.
   */
  creation_tsz: number;

  /**
   * The listing image's creation time, in epoch seconds.
   */
  created_timestamp: number;

  /**
   * The numeric position in the images displayed in a listing.
   * Rank 1 images appear in the left-most position.
   */
  rank: number;

  /**
   * The URL for a 75x75 pixel thumbnail of the image.
   */
  url_75x75: string;

  /**
   * The URL for a 170x135 pixel thumbnail of the image.
   */
  url_170x135: string;

  /**
   * The URL for a thumbnail of the image, no more than 570 pixels wide with variable height.
   */
  url_570xN: string;

  /**
   * The URL for the full-size image, up to 3000 pixels in each dimension.
   */
  url_fullxfull: string;

  /**
   * The numeric height, measured in pixels, of the full-sized image referenced in `url_fullxfull`.
   */
  full_height: Maybe<number>;

  /**
   * The numeric width, measured in pixels, of the full-sized image referenced in `url_fullxfull`.
   */
  full_width: Maybe<number>;

  /**
   * Alt text for the listing image. Max length: 250 characters.
   */
  alt_text: Maybe<string>;
}
