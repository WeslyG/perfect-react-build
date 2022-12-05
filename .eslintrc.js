module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      sourceType: 'module',
      project: './tsconfig.json',
    },
    plugins: ['simple-import-sort', 'react', '@typescript-eslint', 'deprecation', 'prettier'],
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
    ],
    root: true,
    env: {
      es6: true,
      browser: true,
    },
    ignorePatterns: ["**/node_modules/**", "**/documentation/**", "**/dist/**", "**/out/**"],
    rules: {
      "prettier/prettier": "error",
      "@typescript-eslint/ban-ts-comment": [
        "error",
        {
          "ts-ignore": "allow-with-description"
        }
      ],
      "radix": "error",
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'object-shorthand': ['error', 'always'],
      'deprecation/deprecation': 'warn',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'no-debugger': 'error',
      'no-console': 'error',
      'require-await': ['error'],
      'no-return-await': ['warn'],
      'arrow-parens': [
        2,
        'as-needed'
      ],
      'react/prop-types': 'off',
      camelcase: [
        'error',
        {
          properties: 'always',
        },
      ],
      'func-style': [
        'error',
        'declaration',
        {
          allowArrowFunctions: true,
        },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  };
  