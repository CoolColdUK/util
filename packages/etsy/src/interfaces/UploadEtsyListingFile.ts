/**
 * Represents the response from uploading a file to an Etsy listing.
 */
export interface UploadEtsyListingFileResponse {
  /**
   * The unique numeric ID of a file associated with a digital listing.
   * Minimum value: 1
   */
  listing_file_id: number;

  /**
   * The numeric ID for the listing associated with this transaction.
   * Minimum value: 1
   */
  listing_id: number;

  /**
   * The numeric index of the display order position of this file in the listing, starting at 1.
   * Minimum value: 0
   */
  rank: number;

  /**
   * The file name string for a file associated with a digital listing.
   */
  filename: string;

  /**
   * A human-readable format size string for the size of a file.
   */
  filesize: string;

  /**
   * A number indicating the size of a file, measured in bytes.
   * Minimum value: 0
   */
  size_bytes: number;

  /**
   * A type string indicating a file's MIME type.
   */
  filetype: string;

  /**
   * The timestamp when the file was created, in seconds since epoch (Unix timestamp).
   * Minimum value: 946684800 (2000-01-01 00:00:00 UTC)
   */
  create_timestamp: number;

  /**
   * The timestamp when the file was created, in seconds since epoch (Unix timestamp).
   * Minimum value: 946684800 (2000-01-01 00:00:00 UTC)
   */
  created_timestamp: number;
}
