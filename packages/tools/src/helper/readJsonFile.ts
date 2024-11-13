import fs from 'fs';

export default function readJsonFile(absolutePathJsonFile: string): Record<string, any> | undefined {
  if (!fs.existsSync(absolutePathJsonFile)) {
    console.warn(`${absolutePathJsonFile} not exists`);
    return undefined;
  }

  const fileData = fs.readFileSync(absolutePathJsonFile, 'utf-8');

  return JSON.parse(fileData) as Record<string, any>;
}
