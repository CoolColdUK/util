import {defineConfig} from 'tsdown';

export default defineConfig([
  {
    entry: ['src/index.ts'],
    format: 'esm',
    dts: true,
    splitting: false,
    sourcemap: true,
    clean: false,
    outDir: 'dist/esm',
  },
  {
    entry: ['src/index.ts'],
    format: 'cjs',
    dts: false,
    splitting: false,
    sourcemap: true,
    clean: false,
    outDir: 'dist/cjs',
    outExtension() {
      return {
        js: '.cjs',
      };
    },
  },
]);
