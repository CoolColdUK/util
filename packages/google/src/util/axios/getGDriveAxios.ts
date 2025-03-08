import {filterObject} from '@coolcolduk/util';
import axios from 'axios';

export interface GDriveAxiosOption {
  supportsAllDrives?: boolean;
  includeItemsFromAllDrives?: boolean;
}
/**
 * Get axios specifically connects to google drive api
 * @returns
 */
export function getGDriveAxios(apiKey: string, options: GDriveAxiosOption = {}) {
  const {supportsAllDrives, includeItemsFromAllDrives} = options;

  return axios.create({
    baseURL: 'https://www.googleapis.com/drive/v3',
    params: filterObject(
      {
        key: apiKey,
        supportsAllDrives,
        includeItemsFromAllDrives,
      },
      (_k, v) => v !== undefined,
    ),
  });
}
