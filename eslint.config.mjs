import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import importPlugin from 'eslint-plugin-import';
import spellcheck from 'eslint-plugin-spellcheck';

export default tseslint.config(
  [
    js.configs.recommended,
    ...tseslint.configs.recommended,

    {
      ignores: ['node_modules', 'dist', 'jest.config.cjs'],
    },

    {
      files: ['**/*.ts'],
      languageOptions: {
        parserOptions: {
          project: './tsconfig.json',
        },
      },
      plugins: {
        prettier: eslintPluginPrettier,
        import: importPlugin,
        spellcheck: spellcheck,
      },
      rules: {
        // Formatting
        'prettier/prettier': ['error', { semi: true }],
        semi: ['error', 'always'],
        'max-len': ['warn', { code: 300, ignoreUrls: true }],

        // Code structure and clarity
        'max-params': ['warn', 1],
        'default-case': 'warn',
        'require-await': 'error',
        'no-undefined': 'warn',
        'no-var': 'error',
        'prefer-const': ['error', { destructuring: 'all' }],
        'require-object-destructuring': 'off',
        'import/no-unresolved': 'error',

        // Ban inline comments
        'no-inline-comments': 'warn',

        // Force English-only in code, comments and strings
        'spellcheck/spell-checker': [
          'warn',
          {
            comments: true,
            strings: true,
            identifiers: false,
            templates: true,
            lang: 'en_US',
            minLength: 3,
          },
        ],

        // Ban unused code
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            caughtErrorsIgnorePattern: '^_',
            vars: 'all',
            args: 'all',
            caughtErrors: 'all',
            ignoreRestSiblings: false,
          },
        ],
        'no-unused-private-class-members': 'error',

        // TypeScript strictness
        '@typescript-eslint/explicit-member-accessibility': [
          'error',
          { accessibility: 'explicit' },
        ],
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          { allowExpressions: false },
        ],
        '@typescript-eslint/explicit-module-boundary-types': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/prefer-readonly': 'warn',
        '@typescript-eslint/prefer-reduce-type-parameter': 'warn',
        '@typescript-eslint/prefer-function-type': 'warn',
        '@typescript-eslint/no-magic-numbers': [
          'warn',
          { ignoreEnums: true, ignore: [0, 1], enforceConst: true },
        ],
        '@typescript-eslint/no-unsafe-member-access': 'warn',
        '@typescript-eslint/no-extraneous-class': [
          'error',
          { allowConstructorOnly: false },
        ],
        '@typescript-eslint/class-literal-property-style': ['warn', 'fields'],
        '@typescript-eslint/no-empty-function': ['warn'],
        '@typescript-eslint/adjacent-overload-signatures': 'warn',
        '@typescript-eslint/typedef': [
          'error',
          {
            variableDeclaration: true,
          },
        ],

        // Naming conventions
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'classProperty',
            modifiers: ['private'],
            format: ['camelCase'],
            leadingUnderscore: 'require',
          },
          {
            selector: 'interface',
            format: ['PascalCase'],
            custom: {
              regex: '^I[A-Z]',
              match: true,
            },
          },
          {
            selector: 'typeAlias',
            format: ['PascalCase'],
          },
        ],

        // Ban unsafe casts
        'no-restricted-syntax': [
          'error',
          {
            selector: 'TSAsExpression > TSAnyKeyword',
            message: 'Do not use `as any`, types must be explicit and safe.',
          },
        ],
      },
      settings: {
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
            project: './tsconfig.json',
          },
        },
      },
    },
  ],
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tseslint.parser,
    },
  }
);
