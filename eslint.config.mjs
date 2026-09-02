import baseVbetsch from '@vbetsch/config-eslint/base';
import namingVbetsch from '@vbetsch/config-eslint/naming';
import prettierVbetsch from '@vbetsch/config-eslint/prettier';
import strictVbetsch from '@vbetsch/config-eslint/strict';
import spellcheckVbetsch from '@vbetsch/config-eslint/spellcheck';
import spellcheck from 'eslint-plugin-spellcheck';

export default [
  ...baseVbetsch,
  strictVbetsch,
  namingVbetsch,
  spellcheckVbetsch,
  ...prettierVbetsch,

  /* IMPORTANT: You have to add these lines only for the strict module ! */
  {
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  /* --- Overrides --- */
  {
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
      },
    },
  },

  {
    plugins: { spellcheck },
    rules: {
      'spellcheck/spell-checker': [
        'warn',
        {
          skipWords: ['Enum'],
        },
      ],
    },
  },

  {
    rules: {
      '@typescript-eslint/no-magic-numbers': 'off',
    },
  },

  {
    ignores: ['vitest-report/', 'vitest.config.ts'],
  },
];
