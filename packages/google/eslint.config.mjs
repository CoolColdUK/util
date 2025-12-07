import * as eslintConfigModule from '@coolcolduk/eslint-config';

const eslintConfig = eslintConfigModule.default ?? eslintConfigModule;
const baseConfig = typeof eslintConfig === 'function' ? await eslintConfig() : eslintConfig;

export default [
  ...baseConfig,
  {
    rules: {
      'no-console': 'off',
    },
  },
];
