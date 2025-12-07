#!/usr/bin/env node
import {resolve, dirname} from 'path';
import {fileURLToPath} from 'url';
import fs from 'fs';
import childProcess from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function main() {
  const output = resolve(__dirname, '../../packages/web/public/info.json');

  const data = {
    timestamp: new Date().toISOString(),
    rev: childProcess.execSync('git rev-parse HEAD').toString().trim(),
  };

  fs.writeFileSync(output, JSON.stringify(data));
}

main();
