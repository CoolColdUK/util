import {FieldPath} from '../FieldPath';
import {OrderByDirection} from './OrderByDirection';

export interface OrderBy {
  /** the field to order by */
  field: string | FieldPath;
  /**
   * The direction to order by.
   * @default OrderByDirection.ASC
   * */
  direction?: OrderByDirection;
}
