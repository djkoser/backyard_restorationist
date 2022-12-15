const realConfig = {
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: ['./tsconfig.eslint.json']
  },
  plugins: ['react', '@typescript-eslint', 'import', 'prettier'],
  rules: {
    semi: ['error', 'always'],
    'react/prop-types': 0,
    'comma-dangle': ['error', 'never'],
    'no-unused-vars': 0,
    'no-return-await': ['error'],
    'prefer-const': ['error'],
    '@typescript-eslint/no-unused-vars': [
      1,
      {
        varsIgnorePattern: '_|input',
        argsIgnorePattern: '_|input',
        caughtErrorsIgnorePattern: '_.*|input'
      }
    ],
    '@typescript-eslint/no-floating-promises': ['error'],
    '@typescript-eslint/member-ordering': ['error'],
    '@typescript-eslint/no-use-before-define': 'off',
    'prefer-destructuring': [
      'error',
      {
        array: true,
        object: true
      },
      {
        enforceForRenamedProperties: false
      }
    ],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true
      }
    }
  }
};
module.exports = process.env.DISABLE_ESLINT ? {} : realConfig;
