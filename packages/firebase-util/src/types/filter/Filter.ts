import {FilterOp} from './FilterOp';

/**
 * Filter interface
 */
export interface Filter {
  /** the field to filter by. Does not accept FieldPath for now. */
  field: string;
  /** the operator to use for the filter. */
  operator: FilterOp;
  /** the value to filter by. */
  value: any;
}
