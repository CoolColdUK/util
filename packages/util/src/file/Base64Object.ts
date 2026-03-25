/**
 * A object that represents a base64 encoded file
 */
export interface Base64Object {
  /**
   * The base64 encoded data
   */
  data: string;
  /**
   * The name of the file
   */
  name: string;
  /**
   * The type of the file, the mime type of the file such as 'image/jpeg', 'application/pdf', etc.
   */
  type: string;
}
