import {writeFileSync} from 'fs';

export default function writeJsonFile(jsonPath: string, data: string | Record<string, any>) {
  try {
    const combineStr = typeof data === 'string' ? data : JSON.stringify(data, null, 2);
    writeFileSync(jsonPath, `${combineStr}`);
    return true;
  } catch (_err) {
    return false;
  }
}
