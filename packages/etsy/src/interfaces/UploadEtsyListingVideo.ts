import {z} from 'zod';

/**
 * Request data for uploading a video to an Etsy listing.
 * @see https://developers.etsy.com/documentation/reference/#operation/uploadListingVideo
 */
export interface UploadEtsyListingVideoRequest {
  /**
   * The unique ID of a video associated with a listing.
   * Optional, integer >= 1.
   */
  video_id?: number;

  /**
   * The video file to upload.
   * Optional, can be a File object (browser) or binary string (Node.js).
   */
  video?: File | string;

  /**
   * The file name string for the video to upload.
   */
  name?: string;
}

export const zUploadEtsyListingVideoRequest = z
  .object({
    video_id: z.number().int().min(1, {message: 'video_id must be an integer >= 1'}).optional(), // Integer >= 1, optional
    video: z.instanceof(File, {message: 'video must be a File object'}).optional(), // File object, optional (relaxed to File only for simplicity)
    name: z.string({required_error: 'name is required'}).nonempty({message: 'name must not be empty'}).optional(),
  })
  .refine((data) => data.video_id !== undefined || (data.video instanceof File && data.name !== undefined), {
    message: 'Must provide either video_id or both video and name',
    path: [],
  }) satisfies z.ZodType<UploadEtsyListingVideoRequest>;
