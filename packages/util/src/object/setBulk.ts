import {set} from 'lodash';

/**
 * convert an multi layer object to single layer with keys in dot notation
 * @param obj
 * @returns
 */
export function setBulk<T extends Record<string, any>, R extends Record<string, any>>(obj: T): R {
  const rtn = {} as R;
  Object.entries(obj).forEach(([k, v]) => set(rtn, k, v));
  return rtn;
}
