import {Maybe} from '@coolcolduk/typescript-util';
import {pick} from 'lodash';
import {EtsyListing} from '../../interfaces';
import {UpdateEtsyListingRequest} from '../../interfaces/UpdatedEtsyListing';

export function mapEtsyListingToUpdateEtsyListingRequest(
  listing: EtsyListing,
  image_ids?: number[],
  production_partner_ids?: Maybe<number[]>,
): UpdateEtsyListingRequest {
  return {
    image_ids,
    production_partner_ids,
    ...pick(listing, [
      'title',
      'description',
      'materials',
      'should_auto_renew',
      'shipping_profile_id',
      'return_policy_id',
      'shop_section_id',
      'item_weight',
      'item_length',
      'item_width',
      'item_height',
      'item_weight_unit',
      'item_dimensions_unit',
      'is_taxable',
      'taxonomy_id',
      'tags',
      'who_made',
      'when_made',
      'featured_rank',
      'is_personalizable',
      'personalization_is_required',
      'personalization_char_count_max',
      'personalization_instructions',
      'state',
      'is_supply',
      'listing_type',
    ]),
  };
}
