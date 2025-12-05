import {FieldPath} from 'firebase-admin/firestore';
import {OrderByDirection} from './OrderByDirection';

export interface OrderBy {
  field: string | FieldPath;
  direction: OrderByDirection;
}
