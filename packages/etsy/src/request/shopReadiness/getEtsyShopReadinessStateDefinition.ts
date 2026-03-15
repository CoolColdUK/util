import {EtsyShopReadinessStateDefinition} from '../../interfaces/EtsyShopReadinessStateDefinition';
import {EtsyResponse} from '../../interfaces/EtsyResponse';
import {getEtsyAxios} from '../../util/getEtsyAxios';

/**
 * Retrieves a single processing profile (readiness state definition) by readiness state definition ID.
 * @see https://developers.etsy.com/documentation/reference#operation/getShopReadinessStateDefinition
 * @requires scope shops_r
 * @param apiKey - The API key
 * @param secret - The API secret
 * @param accessToken - The OAuth2 access token
 * @param shopId - The unique positive non-zero numeric ID for an Etsy Shop
 * @param readinessStateDefinitionId - The numeric ID of the readiness state definition (processing profile)
 * @returns A single readiness state definition
 */
export function getEtsyShopReadinessStateDefinition(
  apiKey: string,
  secret: string,
  accessToken: string,
  shopId: number,
  readinessStateDefinitionId: number,
): EtsyResponse<EtsyShopReadinessStateDefinition> {
  return getEtsyAxios(apiKey, secret, accessToken).get<EtsyShopReadinessStateDefinition>(
    `/application/shops/${shopId}/readiness-state-definitions/${readinessStateDefinitionId}`,
  );
}
