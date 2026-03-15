/**
 * The readiness state of a product: "1" means ready_to_ship, "2" means made_to_order.
 * @see https://developers.etsy.com/documentation/reference#operation/getShopReadinessStateDefinition
 */
export enum EtsyReadinessStateEnum {
  READY_TO_SHIP = 'ready_to_ship',
  MADE_TO_ORDER = 'made_to_order',
}
