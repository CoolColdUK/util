import {Maybe} from '@coolcolduk/typescript-util';

export interface EtsyUser {
  /** The numeric ID of a user. This number is also a valid shop ID for the user's shop. */
  user_id: number;
  /** An email address string for the user's primary email address. Access to this field is granted on a case by case basis for third-party integrations that require full access */
  primary_email: Maybe<string>;
  /** The user's first name. */
  first_name: Maybe<string>;
  /** The user's last name. */
  last_name: Maybe<string>;
  /** The user's avatar URL. */
  image_url_75x75: Maybe<string>;
}
