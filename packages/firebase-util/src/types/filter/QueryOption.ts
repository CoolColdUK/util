import {MaybeArray} from '@coolcolduk/typescript-util';
import {EndAt} from './EndAt';
import {EndBefore} from './EndBefore';
import {Filter} from './Filter';
import {OrderBy} from './OrderBy';
import {StartAfter} from './StartAfter';
import {StartAt} from './StartAt';

export interface QueryOption {
  /** The maximum number of items to return from the FIRST matching document. */
  limit?: number;
  /**
   * The maximum number of items to return from the LAST matching document.
   * You must specify at least one `orderBy` clause for `limitToLast` queries,
   * otherwise an exception will be thrown during execution.
   * */
  limitToLast?: number;
  /** The order to sort the documents by. */
  order?: MaybeArray<OrderBy>;
  /** The filters to apply to the documents. */
  where?: MaybeArray<Filter>;
  /** The documents to start at. */
  startAt?: StartAt;
  /** The documents to start after. */
  startAfter?: StartAfter;
  /** The documents to end at. */
  endAt?: EndAt;
  /** The documents to end before. */
  endBefore?: EndBefore;
}
