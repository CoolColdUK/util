import {z, ZodType} from 'zod';

/**
 * Represents the request data for uploading a file to an Etsy listing.
 * Uploads a new file for a digital listing, or associates an existing file with a specific listing.
 * You must either provide the listing_file_id of an existing file, or the name and binary file data
 * for a file to upload. Associating an existing file to a physical listing converts the physical
 * listing into a digital listing, which removes all shipping costs and any product and inventory
 * variations.
 */
export interface UploadEtsyListingFileRequest {
  /**
   * The unique numeric ID of a file associated with a digital listing.
   * Minimum value: 1
   * Optional if providing a new file with `file` and `name`.
   */
  listing_file_id?: number;

  /**
   * A binary file to upload.
   * Nullable; required if `listing_file_id` is not provided.
   */
  file?: File; // Using File type for browser context; adjust for Node.js if needed

  /**
   * The file name string of a file to upload.
   * Required if `file` is provided; ignored if `listing_file_id` is used.
   */
  name?: string;

  /**
   * The positive non-zero numeric position in the images displayed in a listing,
   * with rank 1 images appearing in the left-most position in a listing.
   * Minimum value: 1
   * Default: 1
   */
  rank?: number;
}

export const zUploadEtsyListingFileRequest = z
  .object({
    listing_file_id: z.number().int().min(1).optional(), // Integer >= 1, optional
    file: z.instanceof(File).optional(), // File object, nullable, optional
    name: z.string().optional(), // String, optional
    rank: z.number().int().min(1).default(1).optional(), // Integer >= 1, defaults to 1 if omitted
  })
  .refine((data) => data.listing_file_id !== undefined || (data.file instanceof File && data.name !== undefined), {
    message: 'Must provide either listing_file_id or both file and name',
    path: [], // Applies to the whole object; adjust if targeting specific fields
  }) satisfies ZodType<UploadEtsyListingFileRequest>;

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
