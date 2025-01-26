export interface EtsyToken {
  access_token: string;
  token_type: 'Bearer';
  /** expects 3600 */
  expires_in: 3600;
  refresh_token: string;
}
