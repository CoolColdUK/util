#!/usr/bin/env node
import {resolve} from 'path';
import yargs from 'yargs';
import switchPackageTsJs from './actions/switchPackageTsJs';

const parser = yargs(process.argv.slice(2)).help('h').options('toJs', {
  type: 'boolean',
  default: false,
  alias: 'j',
  describe: 'True to switch to Js',
});

async function main() {
  const argv = await parser.argv;

  switchPackageTsJs(resolve(__dirname, '../../packages'), argv.toJs);
}

main();
