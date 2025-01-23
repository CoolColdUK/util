import {Maybe} from '@coolcolduk/typescript-util'; // Adjust import as needed

/**
 * Represents a translation for an Etsy listing.
 */
export interface EtsyTranslation {
  /**
   * The numeric ID for the listing associated with this translation.
   */
  listing_id: number;

  /**
   * The IETF language tag (e.g., "fr") for the language of this translation.
   */
  language: string;

  /**
   * The title of the listing for this translation.
   * Nullable if no title is provided for the translation.
   */
  title: Maybe<string>;

  /**
   * The description of the listing for this translation.
   * Nullable if no description is provided for the translation.
   */
  description: Maybe<string>;

  /**
   * The tags of the listing for this translation.
   * An array of strings representing the translated tags.
   */
  tags: string[];
}
