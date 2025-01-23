import {Maybe} from '@coolcolduk/typescript-util'; // Adjust the import path as needed
import axios, {AxiosResponse} from 'axios';
import getEtsyRequestAxiosConfig from '../../getEtsyRequestAxiosConfig'; // Adjust the import path

export interface FindEtsyShopsResults {
  /** The unique positive non-zero numeric ID for an Etsy Shop. */
  shop_id: number;

  /** The numeric user ID of the user who owns this shop. */
  user_id: number;

  /** The shop's name string. */
  shop_name: string;

  /** The date and time this shop was created, in epoch seconds. */
  create_date: number;

  /** The date and time this shop was created, in epoch seconds. */
  created_timestamp: number;

  /** A brief heading string for the shop's main page. */
  title: Maybe<string>;

  /** An announcement string to buyers that displays on the shop's homepage. */
  announcement: Maybe<string>;

  /** The ISO (alphabetic) code for the shop's currency. */
  currency_code: string;

  /** When true, this shop is not accepting purchases. */
  is_vacation: boolean;

  /** The shop's message string displayed when is_vacation is true. */
  vacation_message: Maybe<string>;

  /** A message string sent to users who complete a purchase from this shop. */
  sale_message: Maybe<string>;

  /** A message string sent to users who purchase a digital item from this shop. */
  digital_sale_message: Maybe<string>;

  /** The date and time of the last update to the shop, in epoch seconds. */
  update_date: number;

  /** The date and time of the last update to the shop, in epoch seconds. */
  updated_timestamp: number;

  /** The number of active listings in the shop. */
  listing_active_count: number;

  /** The number of digital listings in the shop. */
  digital_listing_count: number;

  /** The shop owner's login name string. */
  login_name: string;

  /** When true, the shop accepts customization requests. */
  accepts_custom_requests: boolean;

  /** The shop's policy welcome string (may be blank). */
  policy_welcome: Maybe<string>;

  /** The shop's payment policy string (may be blank). */
  policy_payment: Maybe<string>;

  /** The shop's shipping policy string (may be blank). */
  policy_shipping: Maybe<string>;

  /** The shop's refund policy string (may be blank). */
  policy_refunds: Maybe<string>;

  /** The shop's additional policies string (may be blank). */
  policy_additional: Maybe<string>;

  /** The shop's seller information string (may be blank). */
  policy_seller_info: Maybe<string>;

  /** The date and time of the last update to the shop's policies, in epoch seconds. */
  policy_update_date: number;

  /** When true, EU receipts display private info. */
  policy_has_private_receipt_info: boolean;

  /** When true, the shop displays additional unstructured policy fields. */
  has_unstructured_policies: boolean;

  /** The shop's privacy policy string (may be blank). */
  policy_privacy: Maybe<string>;

  /** The shop's automatic reply string displayed in new conversations when is_vacation is true. */
  vacation_autoreply: Maybe<string>;

  /** The URL string for this shop. */
  url: string;

  /** The URL string for this shop's banner image. */
  image_url_760x100: Maybe<string>;

  /** The number of users who marked this shop a favorite. */
  num_favorers: number;

  /** A list of language strings for the shop's enrolled languages. */
  languages: string[];

  /** The URL string for this shop's icon image. */
  icon_url_fullxfull: Maybe<string>;

  /** When true, the shop accepted using structured policies. */
  is_using_structured_policies: boolean;

  /** When true, the shop accepted OR declined after viewing structured policies onboarding. */
  has_onboarded_structured_policies: boolean;

  /** When true, this shop's policies include a link to an EU online dispute form. */
  include_dispute_form_link: boolean;

  /** When true, the shop has onboarded onto Etsy Payments. */
  is_etsy_payments_onboarded: boolean;

  /** When true, the shop is eligible for calculated shipping profiles. */
  is_calculated_eligible: boolean;

  /** When true, the shop opted in to buyer promise. */
  is_opted_in_to_buyer_promise: boolean;

  /** When true, the shop is based in the US. */
  is_shop_us_based: boolean;

  /** The total number of sales (transactions) for this shop. */
  transaction_sold_count: number;

  /** The country ISO the shop is shipping from. */
  shipping_from_country_iso: Maybe<string>;

  /** The country ISO where the shop is located. */
  shop_location_country_iso: Maybe<string>;

  /** Number of reviews of shop listings in the past year. */
  review_count: Maybe<number>;

  /** Average rating based on reviews of shop listings in the past year. */
  review_average: Maybe<number>;
}

export interface FindEtsyShopsResponse {
  /** The total number of Shops. */
  count: number;

  /** The Shop resources. */
  results: FindEtsyShopsResults[];
}

/**
 * Fetches a list of Etsy shops based on the provided parameters.
 *
 * @param apiKey - The API key
 * @param shopName - The shop's name string (required).
 * @param limit - The maximum number of results to return (default: 25).
 * @param offset - The number of records to skip before selecting the first result (default: 0).
 * @returns A list of Etsy shops as a promise of FindEtsyShopsResponse.
 */
export function findEtsyShops(
  apiKey: string,
  shopName: string,
  limit: number = 25,
  offset: number = 0,
): Promise<AxiosResponse<FindEtsyShopsResponse>> {
  const params = new URLSearchParams({
    shop_name: shopName,
    limit: limit.toString(),
    offset: offset.toString(),
  });

  return axios.get<FindEtsyShopsResponse>(
    `/application/shops?${params.toString()}`,
    getEtsyRequestAxiosConfig({apiKey}),
  );
}
