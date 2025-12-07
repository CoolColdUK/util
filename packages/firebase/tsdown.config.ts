import {defineConfig} from 'tsdown';

export default defineConfig([
  {
    entry: ['src/index.ts'],
    format: 'esm',
    dts: true,
    sourcemap: true,
    clean: false,
    outDir: 'dist/esm',
  },
  {
    entry: ['src/index.ts'],
    format: 'cjs',
    dts: false, // Only generate dts once
    sourcemap: true,
    clean: false,
    outDir: 'dist/cjs',
    outExtensions() {
      return {
        js: '.cjs',
      };
    },
  },
]);
