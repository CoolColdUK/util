/**
 * Represents a video associated with an Etsy listing.
 */
export interface EtsyListingVideo {
  /**
   * The unique ID of a video associated with a listing.
   */
  video_id: number;

  /**
   * The video height dimension in pixels.
   */
  height: number;

  /**
   * The video width dimension in pixels.
   */
  width: number;

  /**
   * The URL of the video thumbnail.
   */
  thumbnail_url: string;

  /**
   * The URL of the video file.
   */
  video_url: string;

  /**
   * The current state of a given video.
   * Possible values:
   * - `"active"`
   * - `"inactive"`
   * - `"deleted"`
   * - `"flagged"`
   */
  video_state: 'active' | 'inactive' | 'deleted' | 'flagged';
}
