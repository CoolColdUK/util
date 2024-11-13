import findAllPackagesJsonPath from '../helper/findAllPackagesJsonPath';
import readJsonFile from '../helper/readJsonFile';
import writePackageJsonFile from '../helper/writePackageJsonFile';

export default function switchPackageTsJs(absolutePath: string, isJs: boolean) {
  console.info(`switchPackageTsJs change ${absolutePath} to ${isJs ? 'js' : 'ts'}`);

  const packages = findAllPackagesJsonPath(absolutePath);
  if (packages.length === 0) {
    console.info('No package found');
    return false;
  }

  packages.forEach((p) => {
    const data = readJsonFile(p);
    if (!data) return false;

    const combinedData = {
      ...data,
      main: isJs ? 'dist/index.js' : 'src/index.ts',
      types: isJs ? 'dist/index.d.ts' : undefined,
    };

    return writePackageJsonFile(p, combinedData);
  });

  return true;
}
