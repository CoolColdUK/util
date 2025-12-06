import eslintConfig from '@coolcolduk/eslint-config';

export default [
  ...eslintConfig,
  {
    rules: {
      'no-console': 'off',
    },
  },
];
