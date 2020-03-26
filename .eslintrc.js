const { resolve } = require

module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'airbnb',
        'airbnb/hooks',
        'plugin:eslint-comments/recommended',
        'plugin:import/typescript',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'prettier/react',
        'prettier/@typescript-eslint',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.ts', '.tsx', '.js', '.json'],
            },
            typescript: {
                directory: [resolve('./tsconfig.json')],
            },
        },
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        'import/extensions': [2, 'ignorePackages', { ts: 'never', tsx: 'never', json: 'never', js: 'never' }],
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        'react/jsx-filename-extension': ['error', { extensions: ['.js', '.tsx'] }],
        'react/state-in-constructor': [2, 'never'],
        '@typescript-eslint/no-empty-interface': 'warn',
    },
    overrides: [
        {
            files: ['**/*.d.ts'],
            rules: {
                'import/no-duplicate': 'off',
            },
        },
    ],
}
