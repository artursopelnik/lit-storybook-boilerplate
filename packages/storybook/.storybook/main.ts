import type { StorybookConfig } from "@storybook/web-components-vite";

import { join, dirname } from "path";

const { BASE_PATH } = process.env

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    getAbsolutePath("@storybook/addon-essentials")
  ],

  framework: {
    name: getAbsolutePath("@storybook/web-components-vite"),
    options: {},
  },

  docs: {},

  async viteFinal(config) {
    config.base = BASE_PATH || config.base

    const { mergeConfig } = await import('vite');
    return mergeConfig(config, {
      build: {
        chunkSizeWarningLimit: 1000,
        rollupOptions: {
          output: {
            manualChunks: {
              lit: ['lit'],
              react: ['react'],
              'react-dom': ['react-dom'],
              'react/jsx-runtime': ['react/jsx-runtime']
            },
          },
        },
      }
    });
  },
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  }
};
export default config;
