import {format} from 'prettier-package-json';
import writeJsonFile from './writeJsonFile';

export default function writePackageJsonFile(outputPath: string, data: Record<string, any>) {
  const orderData = format(data);
  return writeJsonFile(outputPath, orderData);
}
