/**
 * Represents a production partner for an Etsy shop.
 */
export interface EtsyProductionPartner {
  /**
   * The numeric ID of a production partner.
   */
  production_partner_id: number;

  /**
   * The name or title of the production partner.
   */
  partner_name: string;

  /**
   * A string representing the production partner's location.
   */
  location: string;
}
