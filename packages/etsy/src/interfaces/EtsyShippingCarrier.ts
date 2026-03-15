import {EtsyShippingCarrierMailClass} from './EtsyShippingCarrierMailClass';

/**
 * A supported shipping carrier, used to calculate an Estimated Delivery Date.
 * @see https://developers.etsy.com/documentation/reference#operation/getShippingCarriers
 */
export interface EtsyShippingCarrier {
  /** The numeric ID of this shipping carrier. */
  shipping_carrier_id: number;
  /** The name of this shipping carrier. */
  name: string;
  /** Set of domestic mail classes of this shipping carrier. */
  domestic_classes: EtsyShippingCarrierMailClass[];
  /** Set of international mail classes of this shipping carrier. */
  international_classes: EtsyShippingCarrierMailClass[];
}
