import eslintConfig from '@coolcolduk/eslint-config';

const baseConfig = await eslintConfig();

export default [
  ...baseConfig,
  {
    rules: {
      'no-console': 'off',
    },
  },
];
