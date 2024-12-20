
import vue from '@vitejs/plugin-vue';
import typescript from '@rollup/plugin-typescript';

// https://vitejs.dev/config/
export default {
  build: {
    rollupOptions: {
      // Ensures no deps are bundled with build.
      // Source paths are expected to start with `./` or `/` but may be
      // `x:` on Windows.
      external: (id: string) => !id.match(/^((\w:)|(\.?[\\/]))/),
      input: [
        './src/components/my-component/MyComponent.vue'
      ],
      preserveEntrySignatures: "strict",
      output: {
        format: 'es',
        entryFileNames: ({ name }) => `${name}.js`,
        dir: './',
        sourcemap: true,
        preserveModules: true,
			  preserveModulesRoot: 'src',
      }
    },
    outDir: './'
  },
  plugins: [vue(), typescript()],
};