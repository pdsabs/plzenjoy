import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default [
  {
    // Frontend files
    name: 'frontend/files-to-lint',
    files: ['src/**/*.{js,mjs,jsx,vue}'],
  },
  {
    // Backend files
    name: 'backend/files-to-lint',
    files: ['backend/**/*.js'],
    languageOptions: {
      globals: {
        ...js.languageOptions.globals,
        require: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
        module: 'readonly',
      },
      env: {
        node: true, // Enables Node.js environment globals
        es2021: true,
      },
    },
    rules: {
      // Node.js-specific linting rules
      'no-console': 'off', // Allow console logs in backend
    },
  },
  {
    // Files to ignore
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**', 'node_modules/**'],
  },
  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  skipFormatting,
]
