import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import cssInjectedByJs from 'vite-plugin-css-injected-by-js';
import { resolve } from 'path';

// Vite 6 library mode. Verified against vite.dev/config/build-options (May 2026):
// build.lib accepts entry, name, formats, fileName, cssFileName.
// `name` is required when formats include 'umd' or 'iife'.
//
// We use vite-plugin-css-injected-by-js so the production IIFE bundle injects
// its styles at runtime via a <style> tag, instead of emitting a separate
// widget.css that consuming sites would have to load. This matches the
// "drop in one <script>" embed pattern from the build plan.
export default defineConfig({
  // Static replacements applied at build time. Library mode does NOT replace
  // process.env.NODE_ENV by default (Vite assumes a downstream bundler will).
  // Our IIFE bundle loads directly into a vanilla browser via <script> tag,
  // so we have to do the replacement ourselves — otherwise Vue's source
  // throws "ReferenceError: process is not defined" the moment it runs.
  //
  // The __VUE_*__ flags are Vue 3's feature-flag system. Disabling them
  // tree-shakes code paths we never hit (Options API, prod devtools, and
  // hydration mismatch details for SSR — none of which apply here).
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
    __VUE_OPTIONS_API__: 'false',
    __VUE_PROD_DEVTOOLS__: 'false',
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
  },
  plugins: [
    vue(),
    cssInjectedByJs({
      // Use a stable id on the injected <style> tag so a re-mount can find
      // and replace it instead of duplicating.
      styleId: '__comment-widget-styles',
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'CommentWidget',
      fileName: (format) => `widget.${format}.js`,
      formats: ['iife', 'es'],
      cssFileName: 'widget',
    },
    rollupOptions: {
      // Bundle everything — consuming sites are plain HTML with no module system.
      external: [],
      output: {
        inlineDynamicImports: true,
      },
    },
    cssCodeSplit: false,
    sourcemap: true,
    target: 'es2020',
    minify: 'esbuild',
  },
  server: {
    open: '/demo/',
    port: 5173,
  },
});
