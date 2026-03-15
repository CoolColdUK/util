/**
 * Error response shape returned by Etsy Open API v3 on failed requests (e.g. 400, 401, 403, 404).
 * @see https://developers.etsy.com/documentation/reference
 */
export interface EtsyError {
  /**
   * Error type or short message.
   */
  error: string;

  // /**
  //  * Detailed error description when present.
  //  */
  // message?: string;

  // /**
  //  * Optional request/error identifier for support.
  //  */
  // request_id?: string;
}
