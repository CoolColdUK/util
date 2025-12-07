#!/usr/bin/env node
import {resolve, dirname} from 'path';
import {fileURLToPath} from 'url';
import switchPackageTsJs from './actions/switchPackageTsJs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function main() {
  switchPackageTsJs(resolve(__dirname, '../../../../packages'), true);
}

main();
