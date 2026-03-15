import {EtsyShippingCarrier} from '../../interfaces/EtsyShippingCarrier';
import {EtsyList, EtsyResponseMany} from '../../interfaces/EtsyResponse';
import {getEtsyAxios} from '../../util/getEtsyAxios';

/**
 * Retrieves a list of available shipping carriers and the mail classes associated with them for a given country.
 * @see https://developers.etsy.com/documentation/reference#operation/getShippingCarriers
 * @param apiKey - The API key
 * @param secret - The API secret
 * @param originCountryIso - The ISO code of the country from which the listing ships (ISO 3166-1 alpha-2)
 * @returns A set of shipping carriers (count and results)
 */
export function getEtsyShippingCarriers(
  apiKey: string,
  secret: string,
  originCountryIso: string,
): EtsyResponseMany<EtsyShippingCarrier> {
  return getEtsyAxios(apiKey, secret, undefined, {
    params: {origin_country_iso: originCountryIso},
  }).get<EtsyList<EtsyShippingCarrier>>('/application/shipping-carriers');
}
