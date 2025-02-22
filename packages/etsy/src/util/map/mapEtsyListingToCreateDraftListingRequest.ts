import {Maybe} from '@coolcolduk/typescript-util';
import {pick} from 'lodash';
import {EtsyListing} from '../../interfaces';
import {CreateEtsyDraftListingRequest} from '../../interfaces/CreateEtsyDraftListing';

export function mapEtsyListingToCreateDraftListingRequest(
  listing: EtsyListing,
  /** this is used as override for listing */
  image_ids?: number[],
  /** this is used as override for listing */
  production_partner_ids?: Maybe<number[]>,
): CreateEtsyDraftListingRequest {
  return {
    image_ids: image_ids || (listing.images || []).map((i) => i.listing_image_id),
    production_partner_ids:
      production_partner_ids || (listing.production_partners || []).map((l) => l.production_partner_id),
    ...pick(listing, [
      'quantity',
      'title',
      'description',
      'who_made',
      'when_made',
      'taxonomy_id',
      'shipping_profile_id',
      'return_policy_id',
      'materials',
      'shop_section_id',
      'processing_min',
      'processing_max',
      'tags',
      'style',
      'item_weight',
      'item_length',
      'item_width',
      'item_height',
      'item_weight_unit',
      'item_dimensions_unit',
      'is_supply',
      'is_customizable',
      'is_personalizable',
      'personalization_is_required',
      'personalization_char_count_max',
      'personalization_instructions',
      'should_auto_renew',
      'is_taxable',
    ]),
    type: listing.listing_type,
    price: listing.price.amount / listing.price.divisor,
    personalization_char_count_max: listing.personalization_char_count_max || 0,
    personalization_instructions: listing.personalization_instructions || '',
  };
}
