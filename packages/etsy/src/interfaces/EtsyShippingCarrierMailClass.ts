/**
 * A shipping carrier's mail class, used to calculate an Estimated Delivery Date.
 * @see https://developers.etsy.com/documentation/reference#operation/getShippingCarriers
 */
export interface EtsyShippingCarrierMailClass {
  /** The unique identifier of this mail class. */
  mail_class_key: string;
  /** The name of this mail class. */
  name: string;
}
