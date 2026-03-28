import {OrderByDirection} from './OrderByDirection';

export interface OrderBy {
  /** the field to order by. Does not accept FieldPath for now. */
  field: string;
  /** the direction to order by. */
  direction: OrderByDirection;
}
