import {resolve} from 'path';
import recursiveFindPackages from './recursiveFindPackages';

/**
 * Find all path to package.json
 * @param absolutePath
 * @returns
 */
export default function findAllPackagesJsonPath(absolutePath: string) {
  const packagePaths = recursiveFindPackages(absolutePath);
  return packagePaths.map((p) => resolve(p, 'package.json'));
}
