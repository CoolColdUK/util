#!/usr/bin/env node
import {resolve} from 'path';
import fs from 'fs';
import childProcess from 'child_process';

async function main() {
  const output = resolve(__dirname, '../../packages/web/public/info.json');

  const data = {
    timestamp: new Date().toISOString(),
    rev: childProcess.execSync('git rev-parse HEAD').toString().trim(),
  };

  fs.writeFileSync(output, JSON.stringify(data));
}

main();
