export function combineArraysString(delimiter = ' ', firstArray: string[], ...restArrays: string[][]): string[] {
  const nextItem = restArrays ? restArrays[0] : undefined;
  if (!nextItem) return firstArray;
  if (!nextItem.length) return firstArray;

  const combinationsOfRest = combineArraysString(delimiter, nextItem, ...restArrays.slice(1)); // Recursive step

  const rtn: string[] = [];
  // Combine each element of the first array with the combinations of the rest
  firstArray.forEach((a1) => combinationsOfRest.forEach((ao) => rtn.push(a1 + delimiter + ao)));

  return rtn;
}
