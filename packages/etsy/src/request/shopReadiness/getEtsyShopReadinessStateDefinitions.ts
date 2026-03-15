import {buildObjectWhenExists} from '@coolcolduk/util';
import {EtsyShopReadinessStateDefinition} from '../../interfaces/EtsyShopReadinessStateDefinition';
import {EtsyList, EtsyResponseMany} from '../../interfaces/EtsyResponse';
import {getEtsyAxios} from '../../util/getEtsyAxios';

/** Optional query params for getEtsyShopReadinessStateDefinitions. */
export interface GetEtsyShopReadinessStateDefinitionsParams {
  /** Maximum number of results (1–100, default 25). */
  limit?: number;
  /** Number of records to skip (min 0, default 0). */
  offset?: number;
}

/**
 * Retrieves a list of processing profiles (readiness state definitions) for the shop identified by its shop ID.
 * @see https://developers.etsy.com/documentation/reference#operation/getShopReadinessStateDefinitions
 * @requires scope shops_r
 * @param apiKey - The API key
 * @param secret - The API secret
 * @param accessToken - The OAuth2 access token
 * @param shopId - The unique positive non-zero numeric ID for an Etsy Shop
 * @param params - Optional limit and offset for pagination
 * @returns A list of readiness state definitions (count and results)
 */
export function getEtsyShopReadinessStateDefinitions(
  apiKey: string,
  secret: string,
  accessToken: string,
  shopId: number,
  params: GetEtsyShopReadinessStateDefinitionsParams = {},
): EtsyResponseMany<EtsyShopReadinessStateDefinition> {
  const {limit, offset} = params;
  const hasParams = limit !== undefined || offset !== undefined;
  const requestParams = hasParams
    ? {
        ...buildObjectWhenExists('limit', limit),
        ...buildObjectWhenExists('offset', offset),
      }
    : undefined;

  return getEtsyAxios(apiKey, secret, accessToken, requestParams ? {params: requestParams} : {}).get<
    EtsyList<EtsyShopReadinessStateDefinition>
  >(`/application/shops/${shopId}/readiness-state-definitions`);
}
