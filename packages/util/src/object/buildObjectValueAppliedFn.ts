import {transformObjectValue} from './transformObjectValue';

/**
 * Build a function that applies a function to all values in an object
 * - recursive apply valueFn to all values in an object
 * @param valueFn - function to apply to each value
 * @returns function that applies the function to all values in an object
 */
export function buildObjectValueAppliedFn<ReturnType, InputType>(
  valueFn: (value: any) => any,
  shouldApply?: (value: any) => boolean,
): (data: InputType) => ReturnType {
  return function applyToAllValues(data: any): ReturnType {
    // this is to cater for when the valueFn to apply to an object
    if (shouldApply && shouldApply(data)) {
      return valueFn(data);
    }

    // apply value function to all items in array
    if (Array.isArray(data)) {
      return data.map((item) => applyToAllValues(item)) as ReturnType;
    }

    // apply value function to all values in object
    if (typeof data === 'object' && data !== null) {
      return transformObjectValue(data, (value) => applyToAllValues(value)) as ReturnType;
    }

    return valueFn(data);
  };
}
