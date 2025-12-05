import {FieldPath, WhereFilterOp} from 'firebase-admin/firestore';

/**
 * Filter interface
 */
export interface Filter {
  field: string | FieldPath;
  operator: WhereFilterOp;
  value: any;
}

/**
 * Alias for WhereFilterOp, filter operator
 */
export type FilterOp = WhereFilterOp;
