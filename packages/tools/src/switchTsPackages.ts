#!/usr/bin/env node
import {resolve} from 'path';
import switchPackageTsJs from './actions/switchPackageTsJs';

async function main() {
  switchPackageTsJs(resolve(__dirname, '../../../../packages'), false);
}

main();
