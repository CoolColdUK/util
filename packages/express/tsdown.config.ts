import {defineConfig} from 'tsdown';

export default defineConfig([
  {
    entry: ['src/index.ts'],
    format: 'esm',
    dts: true,
    sourcemap: true,
    clean: false,
    outDir: 'dist/esm',
    inlineOnly: false,
  },
  {
    entry: ['src/index.ts'],
    format: 'cjs',
    dts: false,
    sourcemap: true,
    clean: false,
    outDir: 'dist/cjs',
    inlineOnly: false,
    outExtensions() {
      return {
        js: '.cjs',
      };
    },
  },
]);
