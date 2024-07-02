import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import svgr from 'vite-plugin-svgr'

export default {
  input: 'lib/index.ts',
  output: {
    dir: 'dist',
    format: 'es',
    sourcemap: true,
    exports: 'named'
  },
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    json(),
    svgr(),
    typescript({ tsconfig: './tsconfig-build.json' }),
    terser(),
  ],
  external: ['react', 'react-dom'],
};
