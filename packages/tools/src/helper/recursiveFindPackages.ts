import fs, {statSync} from 'fs';
import path, {join} from 'path';

const skipFolders = ['node_modules', 'dist', '.git'];

function isPackage(absolutePath: string) {
  return fs.existsSync(path.resolve(absolutePath, 'package.json'));
}

/**
 * Find all package path that contain package.json except folder specified by absolutePath
 * Will not go into subfolder if it found a package.json
 * @param absolutePath
 * @returns
 */
export default function recursiveFindPackages(absolutePath: string): string[] {
  const folders = fs.readdirSync(absolutePath);
  let result: string[] = [];
  folders.forEach((f) => {
    if (skipFolders.includes(f)) return;
    const newPath = join(absolutePath, f);
    console.log(newPath);

    // skip sym link and files
    if (!statSync(newPath).isDirectory()) return;

    if (isPackage(newPath)) {
      result.push(newPath);
    } else {
      const tmpResult = recursiveFindPackages(newPath);
      result = [...result, ...tmpResult];
    }
  });
  return result;
}
