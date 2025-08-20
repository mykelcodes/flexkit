import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts', 'src/Box.tsx'],
    format: ['cjs', 'esm'],
    dts: true,
    clean: true,
    minify: true,
    treeshake: true,
    splitting: false,
    outDir: 'dist',
    external: ['react', 'react-native', 'react-native-unistyles'],
});
