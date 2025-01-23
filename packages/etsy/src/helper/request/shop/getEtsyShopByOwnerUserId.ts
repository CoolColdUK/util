import axios, {AxiosResponse} from 'axios';
import getEtsyRequestAxiosConfig from '../../getEtsyRequestAxiosConfig'; // Adjust the import path as needed
import {GetEtsyShopResponse} from './getEtsyShop';

/**
 * Fetches the shop information based on the owner's user ID.
 * @param apiKey - The API key
 * @param userId - The user ID of the shop owner.
 * @returns Shop details as a promise of GetEtsyShopResponse.
 */
export function getEtsyShopByOwnerUserId(apiKey: string, userId: number): Promise<AxiosResponse<GetEtsyShopResponse>> {
  return axios.get<GetEtsyShopResponse>(`/application/users/${userId}/shops`, getEtsyRequestAxiosConfig({apiKey}));
}
