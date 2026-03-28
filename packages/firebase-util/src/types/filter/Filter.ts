import type {FieldPath} from '../FieldPath';
import {FilterOp} from './FilterOp';

/**
 * Filter interface
 */
export interface Filter {
  /** Field path as a string or {@link FieldPath} (e.g. nested fields or document ID). */
  field: string | FieldPath;
  /** the operator to use for the filter. */
  operator: FilterOp;
  /** the value to filter by. */
  value: any;
}
